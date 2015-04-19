//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here

function Me(name, age) {
  this.name = name;
  this.age = age;
}
alert(Me.name);

//NEXT PROBLEM


//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

function Favs(band, food, person, book, movie, holiday) {
  this.band = band;
  this.food = food;
  this.person = person;
  this.book = book;
  this.movie = movie;
  this.holiday = holiday;
}
var myThings = new Favs("Jauz", "bagels", "Harrison Ford", "50 Shades", "Dumb & Dumber", "Thanksgiving");
console.log(myThings);




//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

myThings.car = 'jeep';
console.log(myThings);

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.


myThings.food = 'lettuc';
myThings.book = '50 Shades of Gray';




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {}
var item = 'firstPocket';
backPack[item] = 'chapstick';


backPack.color = 'red'

//After you do the above, alert your entire backPack object.

for (var key in backPack) {
    alert(backPack[key] + ': ' + [key]);
  }


/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);


//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
  name: "Larry",
  age: "28",
  height: '6\'',
  gender: 'male',
  married: 'engaged',
  eyeColor: 'brown',
  hairColor: 'brown'
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var key in me) {
  alert(me[key]);
}


//NEXT PROBLEM


//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  intro: 1.23,
  song1: 3.54,
  song2: 3.12,
  song3: 2.45,
  song4: 6.01
}

//Now, loop through your album object alerting every song title individually.

for (var key in album) {
  alert([key]);
}

//NEXT PROBLEM


//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  NJ: 1000000000,
  PA: 500000000,
  NY: 8000000000,
  CA: 9128355312,
  UT: 12
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for (var key in states) {
  if (states[key] > 30000) {
      alert([key] + ' with a pop of ' + states[key] + ' is freakin huuuuuuuge');
  }
}

//NEXT PROBLEM

var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */
for (var key in user) {
  if (!user[key]) {
    delete user[key];
  }

}


//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here
user.name = 'Larry',
user.email = 'larrydigscoupons@gmail.com',
user.pwHash = 'U+Ldlngx2BYQk',
user.birthday = 'Nov 26, 1986',
user.username = 'squidHandz',
user.age = 28

//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user.name = 'Tyler S. McGinnis',
user.email = 'tyler.mcginnis@devmounta.in'

//Now call the sayName method that's on the user object which will alert the users email

user.sayName();



//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {};


/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function() {
  alert('hello');
}
methodCollection.logHello = function() {
  console.log('hello')

}


//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();




//NEXT PROBLEM




var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

function addEmployee() {
  for (var i=0; i < arguments.length-1; ++i) {
    if (arguments[i] !== devMountainEmployees[i]) {
      devMountainEmployees.push(arguments[i]);
    }
  }
}
//console.log(devMountainEmployees.length)

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

function removeEmployee(employee) {
  for (i=0; i<devMountainEmployees.length-1; i++)
    if (devMountainEmployees[i].name === employee || devMountainEmployees[i] === employee) {
        devMountainEmployees.splice(i,1);
    }
}




//NEXT PROBLEM




/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

var users = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}

//Your Code Here

function User(name, email, password, username) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.username = username;
}

var user1 = new User('Tyler McGinnis', 'tylermcginnis33@gmail.com', 'iLoveJavaScript', 'infiniateLoop');
var user2 = new User('Larry Boniface', 'larrydigscoupons@gmail.com', 'supersecret', 'squidHandz')
var user3 = new User('Generic Name', 'genericEmail@rocketmail.com', 'password', 'genericUser')
var user4 = new User('Rae Sremmurd', 'noflex@zone.com', 'iaintgotnotype', 'eardrummers')

function addUsers(userArray) {
  for (var i=1; i < arguments.length-1; ++i) {
    if (arguments[i] !== userArray[i]) {
      userArray.push(arguments[i]);
    }
  }
}

/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular indice he's located in, delete him from the array.*/

function removeUserByEmail(userArray, userEmail) {
  for (i=0; i<userArray.length-1; i++) {
    if (userArray[i].email === userEmail || userArray[i] === userEmail) {
        userArray.splice(i,1);
    }
  }
}

//The activity we just did is very much how data works in 'the real world'.



