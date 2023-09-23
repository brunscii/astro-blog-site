---
title: "Building Pong"
description: "Building pong using Typescript, CSS, and SVGs" 
---

## What is Pong?

Pong is an electronic game of tennis, so to speak. It was released by Atari in 1972. While the first electronic version of tennis was a game called Tennis for Two, dating back to 1958, Pong was one of the first mainstream video games to appear in arcade cabinet form.

Pong is a game that consists of 2 players, each equipped with a paddle. The goal is to bounce the ball off of your paddle so it doesn't go out of bounds on your side. You score points for every ball you hit over the other players side of the court. 

## The basics

In our version of Pong we will be using the web browser and Typescript to code the game.
The first step is setting up a HTML file with the appropriate link to the converted Javascript file. 
But I thought you said we were using Typescript?  We are, but most browsers can't run Typescript natively.
By converting the Typescript (.ts) file into Javascript (.js) we create something that the browser can interpret. 

We will also need to include links to out CSS file as well as create a SVG with elements for our board, ball, paddles, and score.

An SVG?

Yes that. 

An SVG is a Scalable Vector Graphics format that makes images out of elements similar to HTML. It can also use complex math to make shapes. 

So why an SVG instead of a JPG or PNG?

SVG allows for us to define the elements of the board and all game pieces as well as manipulate their positions. 
Being able to do this directly is much easier that importing multiple images for each part of the game board. 
It also allows us to practice SVG manipulation, which can be an essential skill for Frontend Development.

## Game logic

This can be broken into a few major parts. There's the game engine which is the main loop that repeats until game over.
There's the input handler, which checks for input from the user moves the paddles.
There's the ball which moves based on a velocity along the x and y axis. 
The movement is handled in the game loop but the trajectory is calculated upon impact.
There's the bounds detection / collision detection which handles any contact with the ball.
And finally there is a "AI" component for the player to play against in single player.

The input handler, collision detection, and score are all called from the game loop once per loop. 
This ensures that every frame is accurate and responsive.

**I might add an await to the input handler and make it asynchronous for responsiveness.**

The logic is simple, if the ball hits a paddle or the top or bottom wall then it bounces, otherwise it is a point for the opposite side.
Once the ball is out of bounds and the point is score it should be reset and cast toward the opposing team.

### Collision Detection

Collision detection should be performed on movement since this is the only time that collision could happen. 
Logically speaking, collision can only happen after a movement, thus we check after each movement or frame update.

#### Box collision

If we think of the ball and paddles as a box then we can see if the balls outer most point is in conflict with that of the paddles. 
A box has a range on the x and y axis. If the left most point on the box is within the range of another object then we have a collision.

This is a very simple form of collision detection that can be used on the x and y axis. The limitation being that a curve would require a bit more checking to see if there is in fact a collision. 

#### Bounds Collision

Using the same box collision for the ball and a fixed x and y position, we can figure out if the ball is in bounds or not. 
If we set the game board as starting at 0,0 and ending at 100,100 and we have a ball that is 5 in size then we can check for collisions. 
For instance, if the ball is at position 99,20 then we can say that there is a collision on the right side since 99+5 is 104 and is outside of the bounds of the board.

#### Directional Collision Detection

Since we know the direction of the ball's movement we only need to check for collisions on the side of the direction of travel. If we are moving to the left, then there is no need to check for collision on the right side. 
The ball moves to the right on a left collision with the paddle, thus we no longer need to check the left side while moving towards the right. 
For simplicity, collision detection should only check on the directions of motion of any object.

#### Collision Detection Function

We need to pass in the direction of travel, the range on the x and the range of the y of the object, and the x and y range of any object to be tested against. 

This could look something like 
```detect( direction, objectX, objectY, paddleX, paddleY)```

Since the paddles have a fixed x location and a varying y location, we can also forgo the paddleX.
``` detect( direction, objectX, objectY, paddleLeftY, paddleRightY ) ```

This can use the direction to check for the left or right paddle. This might seem a bit wasteful though sending needless information through.

We could also use  `detect( object1X, object1Y, object2X, object2Y )`, which would be more generic and slightly less efficient. 

How about ``` detect( direction, object1COORD, object2COORD ) ```?
This still passes in unused information, however, we can treat the COORD positions as a tuple type and keep the information useful since it has to exist anyway. 

### Score

Since we know how collision detextion works, we can then set the logic to trigger a score event into the collision detection. 

The collision detection on the left and right bounds need to trigger a score for the right or left player respectively.
So basically we can add logic that the ball going out of the right bounds would score a point for the left player. This would then trigger a score update, thus incrementing the plaer's score by a predetermined amount.