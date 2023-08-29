let expect = require('chai').expect;
let request = require('request');
let url = 'http://localhost:3000/api/anime';
let anime = {
    title: '',
    image: '',
    description: '',
    link: ''
};

describe('test GET api', function () {
    it('return status code of 200', function (done) {
        request(url, function (error, response, bodyString) {
            let bodyObj = JSON.parse(bodyString);
            expect(bodyObj.statusCode).to.equal(200);
            done();
        });
    });

});

describe('test POST api', function () {
    it('post anime to DB', function (done) {
        request.post({ url: url, form: anime }, function (a, response, bodyString) {
            let bodyObj = JSON.parse(bodyString);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

// describe('delete a anime', function(){
//     it('delete a anime from database', function(done){
//         request.delete({url:'url', form: anime}, function(a,b,c){
//             //body = JSON.parse(body);
//             //expect(body.message).to.contain('removed');
//             done();
//         });
//     });
// });
