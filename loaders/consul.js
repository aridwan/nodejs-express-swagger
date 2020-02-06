var consul = require('consul')({
    host: process.env.CONSUL_HOST || 'localhost',
    port: 8500
})

function load(){
    consul.agent.service.register({
        Name: 'user',
        Id: 'user_1',
        Tags: ['auth', 'user'],
        Address: process.env.HOST || 'localhost',
        Port: process.env.PORT || 3000,
        Check: {
            http: 'http://' + process.env.HOST || 'localhost' + ':' + process.env.PORT || '3000',
            interval: "5s"
        }
    }, function(err){})
}

module.exports = load;