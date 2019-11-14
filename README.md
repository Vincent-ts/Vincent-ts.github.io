# this repository is for demo day

# Notes for Git
TO PUSH TO GITHUB
`git push origin <branch_name>`

TO CREATE A BRANCH
`git checkout -b <branch_name>`

TO SWITCH BRANCH 
`git checkout <branch_name>`

TO UPDATE TO LATEST MASTER
`git pull origin master`

TO SEE BRANCHES
`git branch`

WHEN THERE’S A CONFLICT ON GITHUB
- SWITCH TO MASTER
- PULL LATEST MASTER
- SWITCH TO YOUR BRANCH
- RUN REBASE COMMAND
    - `git rebase master`
- FIX THE ERRORS IN BRACKETS
- STAGE YOUR CHANGES
    - `git add <file_name>`
- CONTINUE THE REBASE
    - `git rebase —continue`
- PUSH TO GITHUB
    - `git push origin <branch_name> —force`

TO PUSH CODE TO MASTER
- `git add <file_name>`
- do this for all files
- `git commit -m “your message”`
- `git push origin <your_branch_name>`
- MAKE A PULL REQUEST ON GITHUB
- PRESS THE MERGE BUTTON ON GITHUB PULL REQUEST
 CHECKOUT MASTER AND MAKE A NEW BRANCH