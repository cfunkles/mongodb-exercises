module.exports = function(db) {
	// Which movie(s) had the most checkouts in April?
	db.collection('checkouts').aggregate([
		//filter out all months expect april
	{$match: {month: 'apr'}},
	//sort the movieId's by how many you count in descending order, 
	{$sortByCount: '$movieId'}
	], function(err, aggData) {
		if(err) {
			console.log(err);
			return;
		}
		//use a while loop to get some effiency here and not add all the movieIds
		var i = 0;
		var aprCheckoutMoviesId = [];
		while (aggData[i].count === aggData[0].count) {
			//push the matching movieIds and parseInt the ._id?
			//I don't understand why this has to be an integer here and in example 2 it was a string
			aprCheckoutMoviesId.push(parseInt(aggData[i]._id));
			i++;
		}
		db.collection('movies').find({
			//query all the movie documents with the above created array using the $in.
			movieId: {$in: aprCheckoutMoviesId}
		}).toArray(function(err, moviesDoc) {
			if(err) {
				console.log(err);
				return;
			}
			//make a string out of the movieTiles for the result
			var movieTitles = '';
			for (var crap = 0; crap < moviesDoc.length; crap++) {
				//could also push the titles into an array and then use the
				//join method to creat a string as well.
				movieTitles += moviesDoc[crap].title + ', ';
			}
			console.log("Exercise 5:\n\tThe Movies " + movieTitles + `
			 had the most checkouts in April: with ` + aggData[0].count + " checkouts");
		});
	}); 
};
