var config = require('./config');
var Trello = require("node-trello");
var t = new Trello(config.trello.key, config.trello.token);

t.get('/1/boards/' + process.argv[2] + '/cards', function(err, data) {
    if (err) throw err;
    console.log(data);
});
