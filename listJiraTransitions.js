var config = require('./config');
var request = require('request');
var JiraApi = require('jira').JiraApi;

var jira = new JiraApi('https', 'jira.neontribe.org', 443, config.jira.user, config.jira.pass, '2', true);
jira.listTransitions(process.argv[2], function(error, issue) { console.log(error); console.log(issue); });
