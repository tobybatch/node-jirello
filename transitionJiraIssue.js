var config = require('./config');
var request = require('request');
var JiraApi = require('jira').JiraApi;

var jira = new JiraApi('https', 'jira.neontribe.org', 443, config.jira.user, config.jira.pass, '2', true);
jira.transitionIssue(process.argv[2], { "transition": { "id": process.argv[3] } }, function(error, issue) { console.log(error); console.log(issue); });
