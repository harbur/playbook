# Onboarding

To get started quickly and get a unified working environment between teammates we've created an account setup process, a setup script called Laptop and these dotfiles.

## Account

When starting you will be assigned to a tutor, the tutor will:

* Create a [Google Apps] email account.
* Add your account to [Trello] Teams.
* Add your account to [Slack] Team.
* Invite your Git account to [GitHub] Team.
* Add your account to [BitBucket] Team.
* Invite your [Medium] account to *Harbur Cloud Solutions* Publications.

[Google Apps]: https://admin.google.com/harbur.io/AdminHome
[Trello]: https://trello.com
[Slack]: https://harbur.slack.com
[GitHub]: https://github.com/harbur/
[BitBucket]: https://bitbucket.org/harbur/
[Medium]: https://medium.com/

## Laptop

[Laptop] is a setup script for Mac OS X for containers development. It should take less that 15 minutes to install.

This sets up all the necessary tools to run, compile, package and orchestrate containers.

[Laptop]: https://github.com/harbur/laptop

## Dotfiles

Dotfile is a generalized term for a UNIX configuration file, typically prefixed with a dot (e.g. .vimrc) and found in your home directory. Most UNIX programs, including Vim, will load a dotfile during launch.

We recommend using dotfiles to customize your tools and environment to suit your preferences, reduce typing, and get work done. Check them into a git repository for safe-keeping and open-source for the benefit of others.

You can use our dotfiles to make pair programming with teammates easier and make each other more productive.

## Text Editor

We use [VS Code] as a preferred text editor because it is open-source, extensible, and has an active community.

[VS Code]: https://code.visualstudio.com/

## Planning

### Tasks

We have used JIRA, Pivotal Tracker, Lighthouse, Basecamp, Trajectory, Unfuddle, and other task management systems over the years. The following section details a process using Trello but the overall process remains relatively similar across different systems.

No two products are the same, so flexibility in the product development process is important. Trello responds well to changing the structure of the process "on the fly."

A Trello board is a software equivalent of a physical wall with columns of sticky notes. In Trello terminology, the wall is called a "board." The columns are called "lists." The sticky notes in columns are called "cards."

In the following image, "Current" is an example of a board. "In Progress" is an example of a list. "Confirm Internet Explorer support" is an example of a card.

> Next Up Trello board

In any task management system, it's important to have a view into the product development process like this. The Next Up list is the single prioritized list to which the product team refers in order to know what to work on next. It represents one week of work.

A card represents a jobs story, bug fix, engineering task, or general todo.

Cards start out as a simple idea, 1-2 sentences long. As they are pulled through boards, detail is added, explaining why (from a business perspective) we're focusing on it, and maybe notes on suggested implementation (though designers and developers may take or leave it at their discretion; it's supposed to be helpful, not prescriptive).

> Live Trello board

Once the cards in the Next Up list have been prioritized and vetted, they are ready for design and development. A designer or developer "puts their face on it" by assigning it to themselves and pulling it into the In Progress list.

The cards in the In Progress list are actively being designed or developed. Etiquette is that you should never have your face on more than two cards at a time. Work is done in a feature branch.

When a designer or developer creates a pull request for their feature branch, they move the card to the Code Review list. Any reviewers "put their face on it" while reviewing.
There is no bottleneck for merging into master: everyone can do it.

The cards in the Testing on Staging list are deployed to staging. The card creator and a designer review it for accuracy and user experience.

There is no bottleneck for deploying to staging: everyone can do it.

The cards in the Ready for Production list include cards that have been accepted on staging and are ready to be deployed (but not necessarily rolled out).

There is no bottleneck for releasing to production: everyone can do it.

The cards in the Live (Week of [date]) lists have been released. Each week has its own Live list so we can follow what got released when.

## Developing

### Version Control

For version control we use [Git], for hosting the repositories we use for public repos [GitHub] and for private repos [BitBucket].

[Git]: https://git-scm.com/
[GitHub]: http://github.com/harbur
[BitBucket]: https://bitbucket.org/harbur/

## Blogging

We love to share the projects we do at Harbur, both open source and work for clients. One way to do it is in our [blog].

The Harbur's blog platform is [Medium]. You'll be given access to be able to publish.

[blog]: https://blog.harbur.io
[medium]: https://medium.com

### Technologies

The following is a list of the Core technologies we support:

* [Docker]
* [Kubernetes]
* [AWS] & [GCP]

The following is a list of Supporting technologies we've used and integrated:

* Kafka
* Redis

[Docker]: https://docker.com
[Kubernetes]: https://kubernetes.io
[AWS]: https://aws.amazon.com
[GCP]: https://cloud.google.com
