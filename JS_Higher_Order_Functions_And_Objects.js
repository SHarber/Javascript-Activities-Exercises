function Automobile(year, make, model, type) {
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}



Automobile.prototype.logMe = function(printType) {

    if (printType === true) {
        console.log(this.year + " " + this.make + " " + this.model + " " + this.type + "\n");
    } else
        console.log(this.year + " " + this.make + " " + this.model + "\n");

}

var automobiles = [
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
];

/*This function sorts arrays using an arbitrary comparator. 
You pass it a comparator and an array of objects appropriate 
for that comparator and it will return a new array which is 
sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, array) {

    array.sort(comparator);
    return array;
}
/*A comparator takes two arguments and uses some algorithm to compare them. 
If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. 
Here is an example that works on integers*/
function exComparator(int1, int2) {
    if (int1 > int2) {
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2) {
    if (auto1.year < auto2.year)
        return 1;
    else if (auto1.year > auto2.year)
        return -1;
    else
        return 0;
}
/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator(auto1, auto2) {
    var make1 = auto1.make.toUpperCase();
    var make2 = auto2.make.toUpperCase();

    if (make1 > make2)
        return 1;
    else if (make1 < make2)
        return -1;
    else
        return 0;
}

/*This compares two automobiles based on their type. 
The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed).
 It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator(auto1, auto2) {

    var type1 = auto1.type.toUpperCase();
    var type2 = auto2.type.toUpperCase();
    var val1;
    var val2;

    if (type1 == "ROADSTER")
        val1 = 5;
    else if (type1 == "PICKUP")
        val1 = 4;
    else if (type1 == "SUV")
        val1 = 3;
    else if (type1 == "WAGON")
        val1 = 2;
    else
        val1 = 1;
    if (type2 == "ROADSTER")
        val2 = 5;
    else if (type2 == "PICKUP")
        val2 = 4;
    else if (type2 == "SUV")
        val2 = 3;
    else if (type2 == "WAGON")
        val2 = 2;
    else
        val2 = 1;

    if (val1 < val2)
        return 1;
    else if (val1 > val2)
        return -1;
    else
        return (yearComparator(auto1, auto2));

}





console.log("*****\n");
console.log("The cars sorted by year are: \n");
sortArr(yearComparator, automobiles);
for (var i = 0; i < automobiles.length; i++)
    automobiles[i].logMe(false);

console.log("\n");
console.log("The cars sorted by make are: \n");
sortArr(makeComparator, automobiles);
for (var i = 0; i < automobiles.length; i++)
    automobiles[i].logMe(false);
console.log("\n");
console.log("The cars sorted by type are: \n");
sortArr(typeComparator, automobiles);
for (var i = 0; i < automobiles.length; i++)
    automobiles[i].logMe(true);
console.log("*****\n");