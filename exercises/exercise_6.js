module.exports = function(db) {
	// What user(s) had the most checkouts?
	db.collection('checkouts').aggregate([
	//sort the collection by biggest checking out user to lowest checking out user.
	{$sortByCount: '$userId'}
	], function(err, aggData) {
		if(err) {
			console.log(err);
			return;
		} 
		var i = 0;
		var userIds = '';
		//while loop the aggData and stop when the next elements count changes
		//similar syntax as exercise 5.
		while(aggData[i].count === aggData[0].count) {
			//add to the string the aggData for the final result
			userIds += aggData[i]._id;
			i++;
		}
		console.log("Exercise 6:\n\tThe User " + userIds + ` had the most checkouts: with 
		` + aggData[0].count + ' checkouts');
	});
};
