var _ = require('underscore');
var Percolator = require('Percolator').Percolator;

var server;

var resourceDir = __dirname + '/resources';
console.log("routing resources in " + resourceDir);


var mazeDB = {
  "fivebyfive" : {
      cells : {
        "cell0":[1,1,1,0],
        "cell1":[1,1,1,0],
        "cell2":[1,1,0,0],
        "cell3":[0,1,0,1],
        "cell4":[0,1,1,0],
        "cell5":[1,0,1,0],
        "cell6":[1,0,0,1],
        "cell7":[0,0,1,0],
        "cell8":[1,1,0,0],
        "cell9":[0,0,1,1],
        "cell10":[1,0,0,1],
        "cell11":[0,1,1,0],
        "cell12":[1,0,1,1],
        "cell13":[1,0,0,1],
        "cell14":[0,1,1,0],
        "cell15":[1,1,1,0],
        "cell16":[1,0,1,0],
        "cell17":[1,1,0,0],
        "cell18":[0,1,0,1],
        "cell19":[0,0,1,0],
        "cell20":[1,0,0,1],
        "cell21":[0,0,0,1],
        "cell22":[0,0,1,1],
        "cell23":[1,1,0,1],
        "cell24":[0,0,1,1]
      }
  }
};

var app = {
  protocol : 'http',
  resourcePath : '/',
  port : 8080,
  mazeDB : mazeDB
};
var server = new Percolator(app);

server.route('maze', function($){
  var mazenames= [];
  _.each($.app.mazeDB, function(v, k){
    mazenames.push({ name : k});
  });
  $.jsonCollection(mazenames)
      .linkEach('self', function(item){
        return $.uri.child(item.name);
      })
      .send();
});

server.listen(function(err){
  if (err) {console.log(err);throw err;}
  console.log('Percolator running on ' + server.port);
});
