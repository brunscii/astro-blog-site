---
title: "Basic Navigation"
description: "How to get around in the terminal"
pubDate: '4/11/2025'
draft: true
category: "Linux Commands"
---

## Basics Navigation commands

We'll assume that you know at least what linux is and how to install it here. 
This is about the basics of navigation and using the terminal effectively.
This can be espescially useful if you need to navigate a system without the use of a desktop environment or if you just want to be able to move around in the terminal.

First thing first, let's go ahead and list off the basic commands you will need to know. What's a command? A command is a program that takes in arguments in the form of `command <argument[]> -option[]`.
What is argument[]? It just means that we can input a list of arguments just like you can have multiple options, sometimes combined in a single option dash.
This will make sense in a moment when we go over some of the commands.

Basic navigation:
- man -> manual pages -- not for navigation but for help
- cd -> Change Directory
- ls -> List contents of directory
- cp -> Copy
- mv -> Move

### Change Directory (cd)

Using `cd` will change the current working directory to whatever you put into the argument.
According to the man pages we get:
```
cd [-L|[-P [-e]] [-@]] [dir]
      Change the current directory to dir.  if dir is not supplied, the value of the HOME shell variable is the
      default.   The  variable  CDPATH defines the search path for the directory containing dir: each directory
      name in CDPATH is searched for dir.  Alternative directory names in CDPATH are separated by a colon  (:).
      A  null directory name in CDPATH is the same as the current directory, i.e., ``.''.  If dir begins with a
      slash (/), then CDPATH is not used.  The -P option causes cd to use the physical directory  structure  by
      resolving  symbolic links while traversing dir and before processing instances of .. in dir (see also the
      -P option to the set builtin command); the -L option forces symbolic links to be  followed  by  resolving
      the  link after processing instances of .. in dir.  If .. appears in dir, it is processed by removing the
      immediately previous pathname component from dir, back to a slash or the beginning of dir.  If the -e op‐
      tion is supplied with -P, and the current working directory cannot be  successfully  determined  after  a
      successful  directory  change, cd will return an unsuccessful status.  On systems that support it, the -@
      option presents the extended attributes associated with a file as a directory.  An argument of - is  con‐
      verted to $OLDPWD before the directory change is attempted.  If a non-empty directory name from CDPATH is
      used, or if - is the first argument, and the directory change is successful, the absolute pathname of the
      new  working directory is written to the standard output.  If the directory change is successful, cd sets
      the value of the PWD environment variable to the new directory name,  and  sets  the  OLDPWD  environment
      variable  to  the  value of the current working directory before the change.  The return value is true if
      the directory was successfully changed; false otherwise.
```

From the --help option:
```
cd: cd [-L|[-P [-e]] [-@]] [dir]
    Change the shell working directory.

    Change the current directory to DIR.  The default DIR is the value of the
    HOME shell variable. If DIR is "-", it is converted to $OLDPWD.

    The variable CDPATH defines the search path for the directory containing
    DIR.  Alternative directory names in CDPATH are separated by a colon (:).
    A null directory name is the same as the current directory.  If DIR begins
    with a slash (/), then CDPATH is not used.

    If the directory is not found, and the shell option `cdable_vars' is set,
    the word is assumed to be  a variable name.  If that variable has a value,
    its value is used for DIR.

    Options:
      -L        force symbolic links to be followed: resolve symbolic
                links in DIR after processing instances of `..'
      -P        use the physical directory structure without following
                symbolic links: resolve symbolic links in DIR before
                processing instances of `..'
      -e        if the -P option is supplied, and the current working
                directory cannot be determined successfully, exit with
                a non-zero status
      -@        on systems that support it, present a file with extended
                attributes as a directory containing the file attributes

    The default is to follow symbolic links, as if `-L' were specified.
    `..' is processed by removing the immediately previous pathname component
    back to a slash or the beginning of DIR.

    Exit Status:
    Returns 0 if the directory is changed, and if $PWD is set successfully when
    -P is used; non-zero otherwise.
  ```

If this seems like a lot of information then just know that all you need is to understand the use of cd with a destination.

Let's look at an example.

`cd ~/`

Where does this take us? The tilde, ~, is used to signify our home location for our user. Think of it as the user folder or dir.

Another example would be `cd Downloads`. Since we were in our home dir we then moved into the Downloads directory. This is assuming that that directory exists.

Now let's look at using the leading slash. Running something like `cd /home`. 
Since we used the leading slash in our dir name then we are using an absolute path, in our case it is the home dir in the root dir. The root dir being `/`.

Lastly in the super basics of `cd` we can look at using the double dots. Using `..` will take you to the dir that exists above the current one. Think of the directories as a heirarchy with the root dir at the top. It's like an inverted tree. If you are in `/home/user/Desktop` dir and you use the `cd ..` command then you will be take to the `/home/user` dir. Using it again takes you back up another dir to`/home`. 

Another way to use the dot dot is to use it with another slash. Using the previous example of `/home/user/Desktop` we can use `cd ../..` would take you all the way back to `/home`. You can chain together as many dot and slassh combos as you want in order to back up but at a certain point it becomes easier to just type in a absolute path name.

### List (ls)

Knowing what is in the directory you are looking at is pretty useful when you are trying to navigate a folder structure. This is what ls does.

According to man:
```
LS(1)                                               User Commands                                               LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List  information  about the FILEs (the current directory by default).  Sort entries alphabetically if none of
       -cftuvSUX nor --sort is specified.

       Mandatory arguments to long options are mandatory for short options too.

       -a, --all
              do not ignore entries starting with .

       -A, --almost-all
              do not list implied . and ..

       --author
              with -l, print the author of each file

       -b, --escape
              print C-style escapes for nongraphic characters

       --block-size=SIZE
              with -l, scale sizes by SIZE when printing them; e.g., '--block-size=M'; see SIZE format below

       -B, --ignore-backups
              do not list implied entries ending with ~

       -c     with -lt: sort by, and show, ctime (time of last modification of file  status  information);  with  -l:
              show ctime and sort by name; otherwise: sort by ctime, newest first

       -C     list entries by columns

       --color[=WHEN]
              color the output WHEN; more info below

       -d, --directory
              list directories themselves, not their contents

       -D, --dired
              generate output designed for Emacs' dired mode

       -f     list all entries in directory order

       -F, --classify[=WHEN]
              append indicator (one of */=>@|) to entries WHEN

       --file-type
              likewise, except do not append '*'

       --format=WORD
              across -x, commas -m, horizontal -x, long -l, single-column -1, verbose -l, vertical -C

       --full-time
              like -l --time-style=full-iso

       -g     like -l, but do not list owner

       --group-directories-first
              group  directories before files; can be augmented with a --sort option, but any use of --sort=none (-U)
              disables grouping

       -G, --no-group
              in a long listing, don't print group names

       -h, --human-readable
              with -l and -s, print sizes like 1K 234M 2G etc.

       --si   likewise, but use powers of 1000 not 1024

       -H, --dereference-command-line
              follow symbolic links listed on the command line

       --dereference-command-line-symlink-to-dir
              follow each command line symbolic link that points to a directory

       --hide=PATTERN
              do not list implied entries matching shell PATTERN (overridden by -a or -A)

       --hyperlink[=WHEN]
              hyperlink file names WHEN

       --indicator-style=WORD
              append indicator with style WORD to entry names: none (default), slash (-p),  file-type  (--file-type),
              classify (-F)

       -i, --inode
              print the index number of each file

       -I, --ignore=PATTERN
              do not list implied entries matching shell PATTERN

       -k, --kibibytes
              default to 1024-byte blocks for file system usage; used only with -s and per directory totals

       -l     use a long listing format

       -L, --dereference
              when  showing  file  information for a symbolic link, show information for the file the link references
              rather than for the link itself

       -m     fill width with a comma separated list of entries

       -n, --numeric-uid-gid
              like -l, but list numeric user and group IDs

       -N, --literal
              print entry names without quoting

       -o     like -l, but do not list group information

       -p, --indicator-style=slash
              append / indicator to directories

       -q, --hide-control-chars
              print ? instead of nongraphic characters

       --show-control-chars
              show nongraphic characters as-is (the default, unless program is 'ls' and output is a terminal)

       -Q, --quote-name
              enclose entry names in double quotes

       --quoting-style=WORD
              use quoting style WORD for entry names: literal, locale, shell, shell-always,  shell-escape,  shell-es‐
              cape-always, c, escape (overrides QUOTING_STYLE environment variable)

       -r, --reverse
              reverse order while sorting

       -R, --recursive
              list subdirectories recursively

       -s, --size
              print the allocated size of each file, in blocks

       -S     sort by file size, largest first

       --sort=WORD
              sort by WORD instead of name: none (-U), size (-S), time (-t), version (-v), extension (-X), width

       --time=WORD
              change the default of using modification times; access time (-u): atime, access, use; change time (-c):
              ctime, status; birth time: birth, creation;

              with -l, WORD determines which time to show; with --sort=time, sort by WORD (newest first)

       --time-style=TIME_STYLE
              time/date format with -l; see TIME_STYLE below

       -t     sort by time, newest first; see --time

       -T, --tabsize=COLS
              assume tab stops at each COLS instead of 8

       -u     with -lt: sort by, and show, access time; with -l: show access time and sort by name;  otherwise:  sort
              by access time, newest first

       -U     do not sort; list entries in directory order

       -v     natural sort of (version) numbers within text

       -w, --width=COLS
              set output width to COLS.  0 means no limit

       -x     list entries by lines instead of by columns

       -X     sort alphabetically by entry extension

       -Z, --context
              print any security context of each file

       --zero end each output line with NUL, not newline

       -1     list one file per line

       --help display this help and exit

       --version
              output version information and exit

       The  SIZE argument is an integer and optional unit (example: 10K is 10*1024).  Units are K,M,G,T,P,E,Z,Y (pow‐
       ers of 1024) or KB,MB,... (powers of 1000).  Binary prefixes can be used, too: KiB=K, MiB=M, and so on.

       The TIME_STYLE argument can be full-iso, long-iso, iso, locale, or +FORMAT.  FORMAT  is  interpreted  like  in
       date(1).  If FORMAT is FORMAT1<newline>FORMAT2, then FORMAT1 applies to non-recent files and FORMAT2 to recent
       files.  TIME_STYLE prefixed with 'posix-' takes effect only outside the POSIX locale.  Also the TIME_STYLE en‐
       vironment variable sets the default style to use.

       The WHEN argument defaults to 'always' and can also be 'auto' or 'never'.

       Using  color to distinguish file types is disabled both by default and with --color=never.  With --color=auto,
       ls emits color codes only when standard output is connected to a terminal.  The LS_COLORS environment variable
       can change the settings.  Use the dircolors(1) command to set it.

   Exit status:
       0      if OK,

       1      if minor problems (e.g., cannot access subdirectory),

       2      if serious trouble (e.g., cannot access command-line argument).

AUTHOR
       Written by Richard M. Stallman and David MacKenzie.

REPORTING BUGS
       GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
       Report any translation bugs to <https://translationproject.org/team/>

COPYRIGHT
       Copyright   ©   2022   Free   Software   Foundation,  Inc.   License  GPLv3+:  GNU  GPL  version  3  or  later
       <https://gnu.org/licenses/gpl.html>.
       This is free software: you are free to change and redistribute it.  There is NO WARRANTY, to the  extent  per‐
       mitted by law.

SEE ALSO
       dircolors(1)

       Full documentation <https://www.gnu.org/software/coreutils/ls>
       or available locally via: info '(coreutils) ls invocation'

GNU coreutils 9.1                                   September 2022                                              LS(1)
```

Man, who has time to read all of that. Hahaha, I crack myself up. Anyways, all we need to know right now is that `ls` lists everything in the current dir if no other is specified. The most common options are using `-l`, `-a`, and `h`. These are used to show the list as an actual list, show all files (including the hidden ones), and to show the size in a human readable format. 
Let's see some examples.

Using `ls` in our root dir gives us 
```bin   dev  home  lib    lost+found  mnt  proc  run   srv  tmp  var boot  etc  init  lib64  media opt  root  sbin  sys  usr``` with no formatting or extra information. The use of `-l` gives use actual usable inforation. 
```
$ ls -l
total 2432
lrwxrwxrwx   1 root root       7 Mar 25  2024 bin -> usr/bin
drwxr-xr-x   2 root root    4096 Jan 28  2024 boot
drwxr-xr-x  11 root root    3080 Apr 11 23:16 dev
drwxr-xr-x  73 root root    4096 Apr 11 23:17 etc
drwxr-xr-x   3 root root    4096 Jun 29  2024 home
-rwxrwxrwx   1 root root 2424984 Mar 19 17:11 init
lrwxrwxrwx   1 root root       7 Mar 25  2024 lib -> usr/lib
lrwxrwxrwx   1 root root       9 Mar 25  2024 lib64 -> usr/lib64
drwx------   2 root root   16384 Jun 29  2024 lost+found
drwxr-xr-x   2 root root    4096 Mar 25  2024 media
drwxr-xr-x   8 root root    4096 Mar 21 21:35 mnt
drwxr-xr-x   2 root root    4096 Mar 25  2024 opt
dr-xr-xr-x 285 root root       0 Apr 11 23:16 proc
drwx------   4 root root    4096 Mar 21 21:35 root
drwxr-xr-x   7 root root     140 Apr 11 23:16 run
lrwxrwxrwx   1 root root       8 Mar 25  2024 sbin -> usr/sbin
drwxr-xr-x   2 root root    4096 Mar 25  2024 srv
dr-xr-xr-x  11 root root       0 Apr 11 23:16 sys
drwxrwxrwt   5 root root    4096 Mar 30 22:54 tmp
drwxr-xr-x  12 root root    4096 Mar 25  2024 usr
drwxr-xr-x  11 root root    4096 Mar 25  2024 var
```

The first column is the permissions we have for the files and folders. The second is the number of links in the file/dir. In linux, everything is treated as a file. The third is the owner/ owners group. The next is the size of the file. The date modified is next and then the file name is last. 

This gives us much more info but it's not always easy to read the size in bytes. For that we can use the `-h` which will make it more human readable.
We then get usable size info for the files.
```
 ls -lh
total 2.4M
lrwxrwxrwx   1 root root    7 Mar 25  2024 bin -> usr/bin
drwxr-xr-x   2 root root 4.0K Jan 28  2024 boot
drwxr-xr-x  11 root root 3.1K Apr 11 23:16 dev
drwxr-xr-x  73 root root 4.0K Apr 11 23:17 etc
drwxr-xr-x   3 root root 4.0K Jun 29  2024 home
-rwxrwxrwx   1 root root 2.4M Mar 19 17:11 init
lrwxrwxrwx   1 root root    7 Mar 25  2024 lib -> usr/lib
lrwxrwxrwx   1 root root    9 Mar 25  2024 lib64 -> usr/lib64
drwx------   2 root root  16K Jun 29  2024 lost+found
drwxr-xr-x   2 root root 4.0K Mar 25  2024 media
drwxr-xr-x   8 root root 4.0K Mar 21 21:35 mnt
drwxr-xr-x   2 root root 4.0K Mar 25  2024 opt
dr-xr-xr-x 286 root root    0 Apr 11 23:16 proc
drwx------   4 root root 4.0K Mar 21 21:35 root
drwxr-xr-x   7 root root  140 Apr 11 23:16 run
lrwxrwxrwx   1 root root    8 Mar 25  2024 sbin -> usr/sbin
drwxr-xr-x   2 root root 4.0K Mar 25  2024 srv
dr-xr-xr-x  11 root root    0 Apr 11 23:16 sys
drwxrwxrwt   5 root root 4.0K Mar 30 22:54 tmp
drwxr-xr-x  12 root root 4.0K Mar 25  2024 usr
drwxr-xr-x  11 root root 4.0K Mar 25  2024 var
```
 And lastly we might want to see hidden files. In linux, the dot files are hidden by default. Dotfiles are files that have a leading `.` in the name. These are usually used for configurations and hiding things that we don't normally need to see. When using git for code repositories we use it for `.gitignore`. This is a file that tells use what files not to track in our repository.