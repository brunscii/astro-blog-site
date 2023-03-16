---
title: "How to commit the past"
description: "How to make commits for different dates in the command line. Make yesterdays commit today."
pubDate: "Mar, 7, 2023"
draft: true
heroImage: "/public/blogContent/gitPic/gitTime.svg"
---
## Why commit to the past?

There have been times where I have fallen asleep at the desk, or with a laptop on my chest. 
If you code long enough you probably will too. Sometimes we have progress staged but not committed.
Maybe you juse don't want to miss out on that github green. 

Whatever the case, being able to organize your commits is a useful skill to have.
Fortunately it is a trivial task from the command line. Let's explore te git command.

Using `git commit -help` we get the following output.



    usage: git commit [<options>] [--] <pathspec>...

        -q, --quiet           suppress summary after successful commit
        -v, --verbose         show diff in commit message template

    Commit message options
        -F, --file <file>     read message from file
        --author <author>     override author for commit
        --date <date>         override date for commit
        -m, --message <message>
                            commit message
        -c, --reedit-message <commit>
                            reuse and edit message from specified commit
        -C, --reuse-message <commit>
                            reuse message from specified commit
        --fixup [(amend|reword):]commit
                            use autosquash formatted message to fixup or amend/reword specified commit
        --squash <commit>     use autosquash formatted message to squash specified commit
        --reset-author        the commit is authored by me now (used with -C/-c/--amend)
        --trailer <trailer>   add custom trailer(s)
        -s, --signoff         add a Signed-off-by trailer
        -t, --template <file>
                            use specified template file
        -e, --edit            force edit of commit
        --cleanup <mode>      how to strip spaces and #comments from message
        --status              include status in commit message template
        -S, --gpg-sign[=<key-id>]
                            GPG sign commit

    Commit contents options
        -a, --all             commit all changed files
        -i, --include         add specified files to index for commit
        --interactive         interactively add files
        -p, --patch           interactively add changes
        -o, --only            commit only specified files
        -n, --no-verify       bypass pre-commit and commit-msg hooks
        --dry-run             show what would be committed
        --short               show status concisely
        --branch              show branch information
        --ahead-behind        compute full ahead/behind values
        --porcelain           machine-readable output
        --long                show status in long format (default)
        -z, --null            terminate entries with NUL
        --amend               amend previous commit
        --no-post-rewrite     bypass post-rewrite hook
        -u, --untracked-files[=<mode>]
                            show untracked files, optional modes: all, normal, no. (Default: all)
        --pathspec-from-file <file>
                            read pathspec from file
        --pathspec-file-nul   with --pathspec-from-file, pathspec elements are separated with NUL character

There it is. `--date <date>` and `-m <message>`. All we need to do is make the commit for the specified date and give it a message.

An example of one could easily be `git commit --date "yesterday" -m 'fixed button issues'`.
Yes, that's right, github allows you to use human readable dates like yesterday. 
This makes it easy if you just staged the changes you made yesterday.