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
  resourceDir : resourceDir,
  resourcePath : '/maze',
  staticDir : __dirname + '/static',
  port : 8080,
  mazeDB : mazeDB
};
var $P = new Percolator(app);

$P.expressStart(function(err){
  if (err) {console.dir(err);throw err;}
  console.log('Percolator running on ' + $P.port);
});

