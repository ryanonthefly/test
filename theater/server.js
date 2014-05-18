/*
This script depends on Node.js and Express
Install node.js form www.node.org

Install Express by Windows Command Prompt
Type "npm install Express"
 */

var express = require('express');

var jwt = require('jsonwebtoken');  //https://npmjs.org/package/node-jsonwebtoken
var expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt

var secret = 'this is the secret secret secret 12356';

var app = express();
port = process.argv[2] || 8000;


app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );

/*

app.use(function(err, req, res, next){
	if (err.constructor.name === 'UnauthorizedError') {
		res.send(401, 'Unauthorized');
	}
});

//We are going to protect /api routes with JWT
app.use('/api', expressJwt({secret: secret}));

app.use(express.json());
app.use(express.urlencoded());


app.post('/authenticate', function (req, res) {
	//TODO validate req.body.username and req.body.password
	//if is invalid, return 401
	if (!(req.body.username === 'john.doe' && req.body.password === 'foobar')) {
		res.send(401, 'Wrong user or password');
		return;
	}

	var profile = {
			first_name: 'John',
			last_name: 'Doe',
			email: 'john@doe.com',
			id: 123
	};

	// We are sending the profile inside the token
	var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });

	res.json({ token: token });
});

app.get('/api/restricted', function (req, res) {
	console.log('user ' + req.user.email + ' is calling /api/restricted');
	res.json({
		name: 'foo'
	});
});
*/

app.get('/api/wines', function(req, res) {
	console.log('wines get called.');
    res.json([{name:'wine1'}, {name:'wine2'}]);
});

app.get('/rest/wines', function(req, res) {
	console.log('wines get called.');
    res.json([{name:'wine1'}, {name:'wine2'}]);
});

app.get('/rest/wines/:id', function(req, res) {
    res.json({id:req.params.id, name: "The Name", description: "description"});
});

app.get('/stocks', function(req, res) {
    var data = {
        date : '2014-04-28',
        stocks : [
            { symbol : 'AAPL', price : 500 },
            { symbol : 'AMZN', price : 300 },
            { symbol : 'FB', price : 50 },
            { symbol : 'GOOGL', price: 500 },
            { symbol : 'MSFT', price : 40 }
        ]
    };
    res.json(data);
});


app.listen(port); //the port you want to use
console.log("Express server running at => http://localhost:" + port + "/\nCTRL + C to shutdown");
