# node-jirello

Set-up node:

    sudo apt-get update
    sudo apt-get install nodejs
    sudo apt-get install npm
    curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash
    source ~/.profile

Set-up environment

    nvm use 0.10
    npm install node-trello
    npm install jira

Create config.js and populate it with correct credentials.

## Test trello

    nvm use 0.10
    node getTrelloBoards.js
    node getTrelloLists.js 53b98cfa98c7484d545d5bb8
    node getTrelloCards.js 53b98cfa98c7484d545d5bb8
    node transitionTrelloTicket.js TICKET_ID 53b98cfa98c7484d545d5bb9

## Test jira

    nvm use 0.10
    node findJiraIssue.js ISSUE-ID
    node listJiraTransitions.js ISSUE-ID
    node transitionJiraIssue.js ISSUE-ID TRABSITION-ID
