var express = require('express'),
	app = express(),
	router = express.Router(),
	bodyParser = require('body-parser')
  
var stadiums = [{'id':0,'std':"Basketball Stadium",'date':"01/05/2517",'firsttime':"12.00",'lasttime':"13.00"},
			 	{'id':1,'std':"Badminton Stadium",'date':"30/04/2517",'firsttime':"12.00",'lasttime':"13.00"}];

var stadiumIndex = 2;

<<<<<<< HEAD
app.use(express.static('public_html')) 
=======
app.use(express.static('public')) 
>>>>>>> dcaa99bccb9779e61a0accd40536cf050fbc0f9e

router.route('/stadiums') 
	.get( function(req,res) {
		res.json(stadiums);
	})

	.post(function(req, res) { 
	    var stadium = {}; 
	    stadium.id = stadiumIndex++
	    stadium.std = req.body.std
	    stadium.date = req.body.date
	    stadium.firsttime = req.body.firsttime
	    stadium.lasttime = req.body.lasttime
	    stadiums.push(stadium); 
	    // res.json(stadiums); 
	    res.json({ message: 'Added a new stadium'} ) 
	})
  
router.route('/stadiums/:stadium_id')
	.get(function(req,res){
		res.json(stadiums[req.params.stadium_id] )
	})

	.put(function(req,res){
		var id = req.params.stadium_id
		stadiums[id].std = req.body.std
		stadiums[id].date = req.body.date
		stadiums[id].firsttime = req.body.firsttime
		stadiums[id].lasttime = req.body.lasttime
		// res.json(stadiums[id])
		res.json({message: 'Stadium updated'})
	})

	.delete(function(req,res){
		var id = req.params.stadium_id
		delete stadiums[id]
		// res.json(stadiums)
		res.json({message: 'Stadium deleted'})
	})

// all of our routes will be prefixed with /api 
app.use('/api', bodyParser.json(), router)
// app.use('/api',bodyParser.urlencoded({extended:false}), router)

app.listen(50044, function() {
	console.log('server is running...')
}) 