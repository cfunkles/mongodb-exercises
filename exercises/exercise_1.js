module.exports = function(db) {
	// How many movies are there?
	db.collection('checkouts').distinct('movieId', function(err, data) {
		//using the distinct method you can search the checkouts collection or the movies 
		// collection and get the same result.
		console.log("Exercise 1:\n\tThere are " + data.length + " movies");
	});
};
