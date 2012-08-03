var collection = require('resorcery').collection;
var resource = require('resorcery').resource;
var _ = require('underscore');

exports.handler = new resource({

  GET : function(req, res){
    console.log("accpet");
    console.log(req.headers.accept);
    console.log(req.headers.host);
    console.log("accpet");
    console.log(req);
    var that = this;
    var app = this.app;
    console.log("links: ", that.uri.links());
    console.log(this.app.mazeDB);
    var representation = { 
      collection : {
            _links : {
              self : {
                href : that.uri.self()
              }
            }
      }
    };
    _.each(this.app.mazeDB, function(v, name){
      var link = that.uri.self() + '/' + that.uri.urlEncode(name);
      representation.collection._links[name] = {
        href : link
      };
    });

    this.repr(req, res, representation);
  }


});



exports.member = new resource({
  fetch : function(req, cb){
    cb("can't find");
  },

  GET : function(req, res){
    var member = req.resource.fetched;
    that.repr({test : "member GET"});
  }
});
