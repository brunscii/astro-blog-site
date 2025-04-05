---
title: "Bitburner"
description: "Bitburner - a brief overview"
author: "Chris Carlin"
pubDate: 11/20/24
draft: false
---
>
> Bitburner is a programming-based incremental game. Write scripts in JavaScript to automate gameplay, learn ?> skills, play minigames, solve puzzles, and more in this cyberpunk text-based incremental RPG.
> 
> <cite>-- Steam Store Page</cite>


> ABOUT THIS GAME
> After 5 years of development, contributions from hundreds of developers, the critically acclaimed open source > programming hacking sim is available on Steam.
> 
> Inspired by games like Else Heart.break(), Hacknet, Uplink, and Deus Ex, Bitburner is a programming-based idle > incremental RPG where you, the player, take the role of an unknown hacker in a dark, dystopian world. The game > provides a variety of mechanics and systems that can be changed through coding and solved or automated in > whatever way you find suitable.
> 
> While a very basic programming background is recommended, it is not required to play the game!
> 
> Write scripts in JavaScript to automate your gameplay
> 
> Hack through a network of servers to train your abilities and earn money
> 
> Solve real programming questions to hone your skills and earn rewards
> 
> Improve your character with 100+ Augmentations
> 
> Trade in the stock market and write automated trading scripts
> 
> Interact with various gameplay mechanics to increase your stats and earn money
> 
> Explore the world and discover different companies, locations, and factions
> 
> Mini-games
> 
> Unlock secret perma-upgrades
> 
> Continuing development!
>
> <cite>-- also Steam Store Page</cite>

## What is it

Bitburner is a free game that is available on steam. The goal of the game is hard to explain as it depends on the player.
This game is a cyberpunk style text based rpg, rouge-like, idler. What the heck does that mean? It is a cyberpunk themed game that is set in the year 2077. It has RPG elements such as stats that you rank up. It is an idler in the sense that you will have times in which it is best to just let the game go while you sleep since there is quiet a bit of automation in the game. 
Your The goal is to make money and level up in game through challenges that can be solved with code. 
The basic mechanics of making money are hacknets( automated servers that earn you money ), hacking servers, working ( for companies or factions ), crime, the stock market, and infiltration. 
The game is designed to teach basic computer science topics such as how to use a unix-like terminal and basic programming in JavaScript.
It is hard to talk about the game without giving out spoilers. Luckily there is not a ton of plot to the game and what lore there is about the Bit burner universe can be found through exploring the servers in-game. 
This game has a trend where it introduces new challenges as soon as you have solved the current ones.

## Basic Gameplay

The basics of the game are learning how to navigate, unlock and hack the servers. This is the main mechanic of the game.

### Navigation

Navigating to a specific server is easy enough. You start at "home" and can move to any server that is connected to "home". To see which servers you can connect to you can run `scan` or `scan-analyze`.

Let's say that we want to see all available servers to connect to. We type in `scan` and get the following: 
```
home /]> scan
Hostname        IP       Root Access
n00dles         0.8.2.0  N
foodnstuff      57.5.5.0 N
sigma-cosmetics 94.9.2.4 N
joesguns        7.3.0.9  N
hong-fang-tea   47.4.2.5 N
harakiri-sushi  69.6.1.3 N
iron-gym        9.5.3.2  N
```

To move to another server you use the `connect` command.

Let's connect to n00dles using `connect n00dles`.

From there we can scan and see any available servers to connect to.

```
[n00dles /]> scan
Hostname IP       Root Access
home     87.5.5.1 Y
```

As we can see there is nothing else connected to n00dles besides home.

To return home from anywhere we can type `home` and press enter.

Let's say that we want to see what is connected to another server without having to connect to it. We can use `scan-analyze [i]` where i is a depth. By default we can go to a depth of 3. With each level up of `Deepscan` you will get a higher level of depth you can scan.

If you want to scan grom home you can `scan-analyze 3` and see the network to the 3rd level.

```
[home /]> scan-analyze 3
┗ home
  ┃   Root Access: YES, Required hacking skill: 1
  ┃   Number of open ports required to NUKE: 5
  ┃   RAM: 256.00GB
  ┣ n00dles
  ┃     Root Access: NO, Required hacking skill: 1
  ┃     Number of open ports required to NUKE: 0
  ┃     RAM: 4.00GB
  ┣ foodnstuff
  ┃ ┃   Root Access: NO, Required hacking skill: 1
  ┃ ┃   Number of open ports required to NUKE: 0
  ┃ ┃   RAM: 16.00GB
  ┃ ┗ zer0
  ┃   ┃   Root Access: NO, Required hacking skill: 75
  ┃   ┃   Number of open ports required to NUKE: 1
  ┃   ┃   RAM: 32.00GB
  ┃   ┗ silver-helix
  ┃         Root Access: NO, Required hacking skill: 150
  ┃         Number of open ports required to NUKE: 2
  ┃         RAM: 64.00GB
  ...
  ```

As we can see from this example, there is nothing connected past n00dles, however, there are servers connected to foodnstuff that we can't access directly from home. To connect to these we can first connect to foodnstuff and then connect to `zer0` and then `silver-helix`.

Later in the game when you acquire `AutoLink.exe` you can simply click on the server from the `scan-analyze` output to go directly to that server. This is a huge time saver and is worth the initial time used to gain `AutoLink.exe`.

### Hacking

The most basic way to hack a server is to connect to it and simply type in `hack`. The same goes for weakening and growing a server. You can only hack a server if you have root access and your hacking level is greater than what is required from the server. The first server we can hack is `n00dles`.

Where the game gets interesting is the ability to write scripts that can perform these tasks for you, we'll talk more about that later.

When you hack a server you increase the server's security level and decrease the server's available money. To increase the money available you can use `grow` which increases the money available but also the security level. To reduce the security level you can use the `weaken` command.

It is common practice to use `weaken` after each hack or grow command as needed.

The challenging part is that each command will take a different amount of time to execute. For example we use the hack command to gain money from `n00dles`.

```
[n00dles /]> hack
[||||||||||||||||||||||||||||||||||||||||||||||||||]
Hack successful on 'n00dles'! Gained $190.000 and 1.701 hacking exp
Security increased on 'n00dles' from 1.000 to 1.002
```

Notice that we have gained $190 and 1.701 hacking exp but have also increased the security. While this is a small increase in security we will still demonstrate how the `weaken` command works.

```
[n00dles /]> weaken
[||||||||||||||||||||||||||||||||||||||||||||||||||]
Security decreased on 'n00dles' by 0.050 from 1.004 to 1.000 (min: 1.000) and Gained 1.701 hacking exp.
```

Here we can see that the security level of `n00dles` is back down to it's minimum level of 1 and that we also gained the same amount of hacking exp.
What you can't see here is that the `weaken` command took longer to execute than the `hack` command.
This intruduces a time strategy that we must overcome later on.

You can continue to hack and weaken a server until the money is depleted. To avoid this you use the `grow` command. 

```
[n00dles /]> grow
[||||||||||||||||||||||||||||||||||||||||||||||||||]
Available money on 'n00dles' grown by 0.000000%. Gained 1.701 hacking exp.
Security increased on 'n00dles' from 1.004 to 1.004
```

This command usually takes a time that is in betweem hack and grow to complete. It also increases the security of the server. For smaller servers like this we can honestly perform a hack and grow before the weaken and still have the same results.

```
[n00dles /]> hack
[||||||||||||||||||||||||||||||||||||||||||||||||||]
Hack successful on 'n00dles'! Gained $189.000 and 1.701 hacking exp
Security increased on 'n00dles' from 1.002 to 1.004
[n00dles /]> grow
[||||||||||||||||||||||||||||||||||||||||||||||||||]
Available money on 'n00dles' grown by 0.289910%. Gained 1.701 hacking exp.
Security increased on 'n00dles' from 1.004 to 1.008
[n00dles /]> weaken
[||||||||||||||||||||||||||||||||||||||||||||||||||]
Security decreased on 'n00dles' by 0.050 from 1.000 to 1.000 (min: 1.000) and Gained 1.701 hacking exp.
```

In this example we can see that the amount the security was raised from both the `hack` and `grow` was completely removed by the `weaken`. This strategy is known as `HGW` for hack grow weaken.

### Scripting

The scripting portion of the game is the real bread and butter, the meat and potatoes, the main kit and caboodle. The purpose of this game is to help people learn coding concepts in a fun way. The scripting language they use is a beginner friendly version of JavaScript called Netscript.

If you have ever written JavaScript, ECMAscript, TypeScript, or any of the other JS variants then you will be quite adept in scripting in this game. The game gives you a basic editor styled after either vim or nano, with much of the "intellisense" style autocompletions and suggestions. 
The games suggestions are a nice touch as it gives a similar popup style tooltip that let's you see the documentation of the Netscript libraries. This gets you started quickly so you don't have to spend your time reading documentation.

The game has a built-in library called NS.
<br/>NS is the basic functionality for the game. It includes the hack, weaken, and grow functions. 

**For a full list of the basic Netscript functions look [here](https://bitburner.readthedocs.io/en/latest/netscript/netscriptfunctions.html)**  

Later in the game you will get to the bladeburner portion of scripting where you can control the purchase of servers and joining factions. This speeds up late gameplay.
As I have not reached that part of the game yet I'll just have to put that into part 2 of this blog. I'll link to it here when I figure it out.


