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
		//console.log(username);

	    userModel.getByusername(username, function(result){
	    //console.log(result);
		response.render('user/userprofile', result);
	});
		
		
});







module.exports = router;



