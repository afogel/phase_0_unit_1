## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
$ git add [file]
$ git add -A

This git command adds the current file to the staging are. '$ git add -A' adds all files in the current directory as well as descendants to staging area before a commit.

#### branch
$ git branch [branchname]

This git command creates a new branch off of the working branch (whatever branch is currently "checked-out").

#### checkout
$ git checkout [branchname]
This git command switches the working branch to the branch named by [branchname].

#### clone
$ git clone "repo_url"
This git command clones/copies a repository to the working directory that a user is currently in.

#### commit
$ git commit -m "description of commit (or angst if you're feeling angsty :P)"
This git command "saves" or commits the current state of a directory's contents, as well as that directory's descendants.

#### fetch
This git command downloads objects and changes made in another repository, frequently in the cloud (read: from gitHub), into a new branch and doesn't merge the changes into your own branches

#### log
$ git log
This git command provides a log of all previous commits, as well as those commits' address.

#### merge
$ git merge [branchname]
This git command combines the work done in "branchname" into the working branch.

#### pull
$ git pull [branchname]

This git command fetches and merges changes from noted repo/branch into your current working branch.

#### push
$ git push [alias] [branch]

This git command pushes any changes staged for commit to the noted branch in the cloud.

#### reset
$ git reset

This git command removes any file added to the staging area from staging area.

#### rm
$ git rm [options] [--] <file>...

This git command removes/delets the noted file from ones working branch.

#### status
$ git status
This git command shows the working tree's status. It shows what files have changes left to be added to the staging area and what changes are already staged.


## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

## Release 5: Reflection

<!-- Answer the following questions (in addition to the challenge-specific questions) in your reflection:

*What parts of your strategy worked? What problems did you face?
This was a straightforward, albeit very enlightening challenge. As I've been working with the CLI for git purposes since week one, much of this was review. I did not really face any problems in this challenge.

*What questions did you have while coding? What resources did you find to help you answer them?
I didn't really have any questions that weren't addressed by this challenge's resources.

*What concepts are you having trouble with, or did you just figure something out? If so, what?
I'm still having a bit of trouble feeling comfortable with branching and understanding how to get my HEAD back to the current point in time when working in detached HEAD state. Sometimes visualizing the branch merges (which branch has merged into which) is a bit confusing.

*Did you learn any new skills or tricks?
Merging branches :)

*How confident are you with each of the Learning Competencies?
I'm feeling fairly confident with all of them :)

*Which parts of the challenge did you enjoy?
The reading was interesting, but challenging to wrap my mind around a bit.

*Which parts of the challenge did you find tedious? 
The work is slow, but so it goes when learning something that doesn't always come naturally. Tedious? Nothing really. I wish I'd had this challenge in week one, though :)
-->