## 1. [Git and Github](1_get_started/readme.md) Reflection

* What struggles did you have setting up git and GitHub? What did you learn in the process?
* Write an explanation of and compare git and GitHub to a non-technical audience. 
* Describe what version control is and how GitHub helps with it.
* Why do developers use version control (git)? Does that make sense to you? Why or why not?
* What doesn't make sense? What does?

I'm working on OSX 10.9.1. I had REALLY intense struggles setting up git and GitHub. Whenever I went to run a "git init" command in the CLI, I would get the error messages
	
	error: could not lock config file /Users/Ariel/my-first-repo/.git/config: Permission denied
	error: could not lock config file /Users/Ariel/my-first-repo/.git/config: Permission denied
	error: could not lock config file /Users/Ariel/my-first-repo/.git/config: Permission denied
	Reinitialized existing Git repository in /Users/Ariel/my-first-repo/.git/

	I initially tried running the commands with the "sudo" prefix, but that was less than illuminating and probably fairly reckless and dangerous. Google searches of my error message led me to stackoverflow posts that were from 2011 and did not provide any actionable and helpful advice. Posting to the G+ group, I got some advice, including a link to GitHub's troubleshooting for "Permission denied", however after following all the steps and registering a completely new SSH key for GitHub, I still encountered the same error message. 

	After everything, I was able to install git using the CLI command "xcode-select --install", which fixed the issues. I LEARNED HOW TO PUSH GITS TO GITHUB USING THE CLI!!! W000000T!!!!
	
	Git is version control software that lives on your computer. It allows the user to keep track of different versions of the same file, similar to a "track changes" in Microsoft Word. It facilitates a clean way of having many different programmers work on a single file without interferring with previous changes that were made, and creates a record of all different versions that can be easily accessed to view the evolution of a file. When a new feature is finished, git has a feature called "merge" that allows one to incorporate any or all changes made in various different versions of the file/program into the main, final version. 
	GitHub is a social network where programmers come to share and collaborate on gits. The main difference between git and GitHub is that GitHub is contained entirely online and you can share your project with other developers while git is contained entirely on your computer's hard drive.
	
	Version control tracks the changes that one makes to a file. It allows a person to go back to prior versions of the same file, in case they want to retrace their steps, or use aspects of a previous iteration of the same file. It also allows for multiple people to make edits to a single file without making any edits to others' code, and then finally all the edits can be compiled in one fell swoop. GitHub helps by allowing developers to store their "branch"s online, then gives the administrator of the master branch the ability to merge changes made to alternate branches into the main file. The distributed nature of GitHub and the fact that it remains in the cloud allows for developers to work on open source projects from around the world.
	
	Developers use VCS in order to allow for multiple devs to edit a project at the same time. It minimizes mistakes, reduces duplication of efforts, and helps streamline team development.
	
	One thing that still doesn't completely make sense to me is how to go back to previous commits on git using the CLI, as well as how to create branches to and merging them.
