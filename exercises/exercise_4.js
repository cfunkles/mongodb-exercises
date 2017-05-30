module.exports = function(db) {
	// Which month had the most checkouts overall?

	//This is how I would solve this without using aggregation. It's very messy, 
	// and I hadned figured out aggregation when I solved this.
	// At the bottom there is another posibility I tried to explore, 
	// but I couldn't get the name of the month to show up with it,
	// I know this is an ugly solution. someday I will revist it.


	// I was able to make this global variable to work on this problem
	// I know it is a very bad thing to do and should be avoided.
	// plus I notice you might get funny results depending on the order this runs in, 
	// because it might happen out of order.
	var biggestCheckoutMonth = 0;
	db.collection('checkouts').count({
		//query the count of january checkouts
		month: 'jan'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//compare the count callback number with global variable and then reset it.
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				//not going to console.log this now because it may not be the biggest 
				//checkout month, if it runs first then it would be.
				//going to run this db search again at the end
			}
	});
	//same code just copy and pasted.
	db.collection('checkouts').count({
		month: 'feb'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				//now I can log it if it's bigger, unfortunetly one of these checkout months
				//is bigger than january followed by an other month that is bigger
				//you will see the console print twice!
				console.log("Exercise 4:\n\tThe month February had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'mar'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("CExercise 4:\n\tThe month March had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'apr'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month April had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'may'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month May had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'jun'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month June had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'jul'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month July had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'aug'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month August had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'sep'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month September had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'oct'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one, crap this is getting to be a lot of typing
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month October had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'nov'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month November had the most checkouts of: " + count);
			}
	});
	//this one is the winner!
	db.collection('checkouts').count({
		month: 'dec'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//here is the right one!
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month December had the most checkouts of: " + count);
			}
	});
	db.collection('checkouts').count({
		month: 'jan'
	}, function(err, count) {
		if(err) {
			console.log(err);
			return;
		}
		//not this one, but better double check because I didn't console.log() above.
		if (count > biggestCheckoutMonth) {
				biggestCheckoutMonth = count;
				console.log("Exercise 4:\n\tThe month January had the most checkouts of: " + count);
			}
	});
};

/*

	code ideas that didn't work :()

*/
// for (var i = 1; i < 13; i++) {
	//tried to do the same thing as above but only write the code once, but couldn't 
	//tell what the name of the month was
	// 	db.collection('checkouts').count({
	// 	month: strMonth(i)
	// 	}, function(err, count) {
	// 		if(err) {
	// 			console.log(err);
	// 			return;
	// 		}
	// 		if (count > biggestCheckoutMonth) {
	// 			biggestCheckoutMonth = count;
	// 			console.log("Exercise 4:\n\tThe month above had the most checkouts of: " + count);
	// 		}
	// 	});
	// }

	// function strMonth(i) {
	// 	switch (i) {
	// 		case 1:
	// 		return 'jan';
	// 		case 2:
	// 		return 'feb';
	// 		case 3:
	// 		return 'mar';
	// 		case 4:
	// 		return 'apr';
	// 		case 5:
	// 		return 'may';
	// 		case 6:
	// 		return 'jun';
	// 		case 7:
	// 		return 'jul';
	// 		case 8:
	// 		return 'aug';
	// 		case 9:
	// 		return 'sep';
	// 		case 10:
	// 		return 'oct';
	// 		case 11:
	// 		return 'nov';
	// 		case 12:
	// 		return 'dec';
	// 	}
	// }

