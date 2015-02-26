var config = require('./config');

var Trello = require("node-trello");
var t = new Trello(config.trello.key, config.trello.token);

t.get('/1/members/me', function(err, data) {
    if (err) throw err;
    // console.log(data);
    var boards = data.idBoards;
    for (var i = 0; i < boards.length; i++) {
        t.get('/1/boards/' + boards[i], function(err, board) {
            if (err) throw err;
            console.log('id: ' + board.id + '\t' + board.name);
        });
    }
});
