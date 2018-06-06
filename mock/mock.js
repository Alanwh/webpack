let Mock = require('mockjs');

var Random = Mock.Random;

module.exports = function () {
    var data = {};
    data.user = {
        'name': Random.cname(),
        'intr': Random.word(20)
    };
    data.time = {
       'year': new Date().getFullYear(),
       'time': new Date().toLocaleTimeString()
    }
    return data;
};