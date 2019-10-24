var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();




router.get('*', function(request, response, next){

	if(request.cookies['username'] != null){
		next();
	}else{
		response.redirect('/logout');
	}

});

router.get('/userprofile', function(request, response){

		var username=request.cookies['username'];
		 

	    userModel.getByusername(username, function(result){
	    
	    if(result.usertype=="user"){response.render('user/userprofile', result);}
	    else
	    {
	    	response.render('user/adminprofile', result);
	    }

		


	});


	 

router.get('/edit', function(request, response){
	var username=request.cookies['username'];
	userModel.getByusername(username, function(result){

		response.render('user/edit', result);
	});
	
});




		
		
});







module.exports = router;



