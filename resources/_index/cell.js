var Resource = require('resorcery').resource;

exports.handler = new Resource({

  GET : function(req, res){
    res.send("OK");
  }

});



