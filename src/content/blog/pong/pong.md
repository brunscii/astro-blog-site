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