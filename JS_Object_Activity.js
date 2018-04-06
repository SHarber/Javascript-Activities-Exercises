/**************************************
* * Deep Equal function to determine
* * if the values of their actual 
* * properties are equal.
**************************************/

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


function deepEqual(object1, object2)
{
	//Check to see if the type of object 1 and object 2 are equal.
	if ((typeof object1 == "object" && object1 != null) && (typeof object2 == "object" && object2 != null))
	{
		var prop1Count = 0;
		var prop2Count = 0;
		for (var prop1 in object1) //Count number of properties in object1
			prop1Count += 1;
		for (var prop2 in object2)//Count number of properties in object2
			prop2Count += 1;
		if (prop1Count != prop2Count) //If count is not equal
			return false; //Return false.

		for (var prop in object1) //Loop through properties of object1.
		{
			if (object2.hasOwnProperty(prop)) //See if object 2 has the property
			{
				if (!deepEqual(object1[prop], object2[prop])) //Check to see if those properties are equal
					return false; //If they are then return false
			}
			else  // if object 2 does not have the property
				return false; //Return false.
		}

		return true;  //Otherwise return true
	}

	else if (object1 !== object2) //Else if object one is not equal equal to object 2
		return false; //Return false
	else 
		return true; //Otherwise return 2.

}

