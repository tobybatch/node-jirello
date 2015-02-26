var config = require('./config');
var Trello = require("node-trello");
var t = new Trello(config.trello.key, config.trello.token);

t.put('/1/cards/' + process.argv[2], { idList: process.argv[3] }, function(err, data) {
    // if (err) throw err;
    console.log(data);
});
