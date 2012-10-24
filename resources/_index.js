var collection = require('resorcery').collection;
var resource = require('resorcery').resource;
var _ = require('underscore');





exports.handler = new resource({

  GET : function(req, res){
    var that = this;
    var app = this.app;
    console.log("links: ", that.uri.links());
    console.log(this.app.mazeDB);
    var representation = { 
      collection : {
            mazes : [],
            _links : {
              self : {
                href : that.uri.self()
              }
            }
      }
    };
    _.each(this.app.mazeDB, function(v, name){
      var link = that.uri.self() + '/' + that.uri.urlEncode(name);
      var item = {name : name,  _links : {self  : {href : link}}};
      representation.collection.mazes.push(item);
    });

    this.repr(req, res, representation);
  }


});



exports.member = new resource({
  fetch : function(req, cb){
    var name = this.uri.param('root');
    var maze = this.app.mazeDB[name];
    if (!maze){ cb(true); }
    cb(null, maze);
  },

  GET : function(req, res){
    var name = this.uri.param('root');
    var member = req.resource.fetched;
    var maze = {  
                  name : name,
                  //cells : member.cells,
                  _links : {
                            self : this.uri.self(),
                            collection : this.uri.absolute(this.uri.parent()),
                            start : this.uri.self() + '/0:north'
                          }};
    this.repr(req, res, maze);
  }
});
