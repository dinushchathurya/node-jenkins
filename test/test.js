var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

describe("Sample unit test", function(){
    if("should return home page", function(done){
        server.get("/")
        .expect("Content-type",/text/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200);
            done();
        });
    });
});