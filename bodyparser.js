var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');
	cookieParser = require('cookie-parser');
	session = require('express-session');

	app.use(session({ 	secret: 'keyboard cat', 
					cookie: { maxAge: 60000 },
					resave: false,
					saveUninitialized: false
					}))

	app.use(cookieParser('keyboard cat'))


var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static(__dirname + '/public'));


app.post('/calculate', urlencodedParser, function(req, res,next){
	var result = (3.14*parseInt(req.body.rr)*parseInt(req.body.rr)) * parseInt(req.body.hh);

	res.cookie('result',result);
	
	res.send('ปริมาตรทรงกระบอก = '+ result  );

	var sess = req.session
	sess.views=result
	console.log(sess.views);
	next();
});
console.log('Web server is sunning...')
app.listen(8000);