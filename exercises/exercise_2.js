module.exports = function(db) {
	// Which users checked out any of the Lord of the Rings trilogy?
	db.collection("movies").find({
		title: {
			//search for patterns matching this regex, accounting for lowercase or capital letters, 
			//and anything written afterwards.
			$regex : /[Th]he [Ll]ord of the [Rr]ings.+/
		}
		//always use toArray function when using the find method.
	}).toArray(function(err, moviesDoc) {
		if (err) {
			console.log(err);
			return;
		}
		//array-a-fy the result as just an array of movieId's and not an array of objects
		var stupidMoiveIdArr = [];
		for (var blahh = 0; blahh < moviesDoc.length; blahh++) {
			//some reason the elements in the array need to be a string?***
			stupidMoiveIdArr.push(moviesDoc[blahh].movieId.toString());
		}
		//the result is an array of 3 movieIds, now lets delete the loop I used and insead we will
		//use the $in to query multiple movieIds which are all stringafied.
		//in exersise 5 I have to parseInt the elements and I am confused why?***
		//to find the users who checked those out.
		db.collection('checkouts').find({
			//query the movieId with the value of the specific movie. The value needs to be a string? 
			movieId: {$in: stupidMoiveIdArr}
		}).toArray(function(err, LOTRCheckOuts) {
			if(err) {
				console.log(err);
				return;
			}
			//go through results of checkouts and select just the usernames 
			//and puts them in a new array
			var userIds = [];
			for (var j = 0; j < LOTRCheckOuts.length; j++) {
				userIds.push(LOTRCheckOuts[j].userId);
			}
			//now remove the duplicated users, going to use a previous written algorythm 
			//that removes dups
			var noDupUsers = [];
			for (var k = 0; k < userIds.length; k++) {
				if(userIds.indexOf(userIds[k]) === k) {
					noDupUsers.push(userIds[k]);
				}
			}
			//was using a previous method that was incredibly dirty and I think I would 
			//have needed promises to solve. Overall I was cursing at this question a lot!
			var printResult = `Exercise 2:\n\t The Lord of the Rings movies were checked out by users: 
			`+  noDupUsers;
			console.log(printResult);
		});
	});
};
