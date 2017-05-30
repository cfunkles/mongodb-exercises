module.exports = function(db) {
	//What is the title of the movie(s) that was the most checked out?
	//going to use the find the mode algorythm from previous homework to solve this.
	db.collection('checkouts').find({}).toArray(function(err, checkoutsDoc) {
		if (err) {
			console.log(err);
			return;
		}
		var mostCheckoutIds = [];//the resulting movieIds
		var countOfMovieId = [];//the array that counts number of each movieId
		var IdCount = 1;//keeps track of highest movieId count
		for (var i = 0; i < checkoutsDoc.length; i++) {
			//see if movidId has been seen yet
			if (countOfMovieId[checkoutsDoc[i].movieId] === undefined) {
				countOfMovieId[checkoutsDoc[i].movieId] = 0;
			}
			//add 1 each time movieId is seen
			countOfMovieId[checkoutsDoc[i].movieId] += 1;
		}
		//start at 1 because there is no movie with id 0.
		for (var j = 1; j < countOfMovieId.length; j++) {
			if (countOfMovieId[j] === IdCount) {
				//This happens on ties, adds the movieId to mostCheckoutId
				IdCount = countOfMovieId[j];
				mostCheckoutIds.push(j);
			} 
			if (countOfMovieId[j] > IdCount) {
				//This happens when count it greater, stops remembering movieIds that are no longer greater in count
				mostCheckoutIds = [];
				IdCount = countOfMovieId[j];
				mostCheckoutIds.push(j);
			}
		}
		//loop through results then search movies database for title.
		//since result is one movie I could skip this loop and just access movieId through array index notation.
		for (var k = 0; k < mostCheckoutIds.length; k++) {
			db.collection('movies').findOne({
				movieId: mostCheckoutIds[k]
			}, function(err, movieDocs) {
				//How do I make linter happy here? I wrote an outside function to fix, but didn't work.
				if (err) {
				console.log(err);
				return;
			}
			console.log ("Exercise 3:\n\tThe movie " + movieDocs.title + " was checked out " + IdCount + " times");
			} 
			);
		}
		//did this so linter doesn't yell at me..
		/* Why doesn't this work?
		function callback(err, movidDocs) {
			if (err) {
				console.log(err);
				return;
			}
			console.log ("Exercise 3:\n\tThe movie(s) " + data.title + " checked out " + IdCount + " times");
		}
		*/
	});
};
