'use strict';

var fullname = 'GUven Seckin';

var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};

var getLastName = function getLastName(name) {
    return name.split(' ')[1];
};

//console.log(getFirstName(fullname));
//console.log(getLastName(fullname));


// arrow vs ec5 function bu kısımda argument olarak 10 u da basar

var funcName = function funcName(a, b) {

    //console.log(arguments);

    return a + b;
};

funcName(51, 21, 10);

// with arrow function arguments is not valid

var funcArrow = function funcArrow(a, b) {

    return a + b;
};

//console.log(funcArrow(1,2,3));

/*
const user = {
    name:'Guven',
    cities : [' Istanbul', 'Antalya','Gumushane'],
    printLivedPlaces(){


      //  this.cities.forEach(e=> console.log(this.name+  e));          is okey

       this.cities.forEach((e)=> { console.log(this.name + e)});     //is also okey
        
       this.cities.forEach(function(e) {
        console.log(this.name + e)                                       TypeError: this is undefined
      }) 
        


    }
}*/

var user = {
    name: 'Guven',
    cities: [' Istanbul', 'Antalya', 'Gumushane'],
    printWhereYouLive: function printWhereYouLive() {
        var _this = this;

        return this.cities.map(function (e) {
            return _this.name + ' has lived in ' + e;
        });
    }
};

console.log(user.printWhereYouLive());

var multiplier = {
    operator: ['*', '+'],
    number: [],
    setNumber: function setNumber(a, b) {
        this.number.push(a);
        this.number.push(b);
    },
    multiply: function multiply(c) {

        if (c == '*') {
            var value = this.number[0] * this.number[1];
        } else {
            var value = this.number[0] + this.number[1];
        }

        this.number = [];
        return value;
    }
};

multiplier.setNumber(1, 2);
console.log(multiplier.multiply(multiplier.operator[1]));

multiplier.setNumber(2, 4);
console.log(multiplier.multiply(multiplier.operator[1]));

multiplier.setNumber(10, 2);
console.log(multiplier.multiply(multiplier.operator[1]));
