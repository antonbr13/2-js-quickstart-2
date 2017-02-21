/*jshint esversion: 6 */





// Switch Statements for Control Flow

   //below we are utilizing the fall-through feature of the switch statement. A matched case will run until a break (or the end of the switch statement) is found

   // the break statement is necessary or the switch logic will run until it is done or finds another break statement

         // var question = prompt('What is your birth month?').toLowerCase();
         var question = 'may';


         switch (question) {
            case 'january' :
            case 'february':
            case 'december':
               console.log("your birthday is during the winter!");
               break;
            case 'march':
            case 'april':
            case 'may'  :
               console.log("you have a spring birthday. yay!");
               break;
            case 'june'  :
            case 'july'  :
            case 'august':
               console.log("ahh, a summer birthday - so lucky :)");
               break;
            case 'september':
            case 'october'  :
            case 'november' :
               console.log('enjoy the falling leaves.');
               break;

            default:
               console.log("you must have not entered the name of a month - try again.");
               break;
         }




// for loops - making half a tree ----------------------------------------------

   // version 1
      console.log('triangle 1 -------------');
      for (var triangle1 = '#'; triangle1.length < 8; triangle1 += '#') {
         console.log(triangle1);
      }



   // version 2
      console.log('triangle 2 -------------');
      var triangle2 = '';

      for (let i = 0; i < 7; i++) {
         console.log(triangle2 += '#');
      }



   // version 3
      console.log('triangle 3 -------------');
      var triangle3 = '';

      for (let i = 0; i < 7; i++) {
         triangle3 += '#';
         console.log(triangle3);
      }



   // version 4
      console.log('triangle4 --------------');
      var triangle4 = '';
      var i = 0;

      do {
         triangle4 += '#';
         console.log(triangle4);
         i++;
      } while (i < 7);



   // version 5
      console.log('triangle5 --------------');
      var triangle5 = '';
      var j = 0;

      while (j < 7) {
         triangle5 += '#';
         console.log(triangle5);
         j++;
      }



// for loops - FIZZBUZZ ----------------------------------------------
   // for loops are useful when you know how many times you want your loop to iterate


   // Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
   // When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
   // (This is actually an interview question that has been claimed to weed out a signi cant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)
   console.log('FizzBuzz --------------');

   for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         console.log('FizzBuzz');
      }
      else if (i % 3 === 0) {
         console.log('Fizz');
      }
      else if (i % 5 === 0) {
         console.log('Buzz');
      }
      else{
         console.log(i);
      }
   }



// do while loops ----------------------------------------------
   // will run the code at least once before it checks the condition
      // if the condition is met then it will continue to run

   //preferable to a for loop when we are not certain how many times we need to iterate

   // log 0 to 10 with 'do while loop'
   console.log('"do while" loop count to ten --------------');

      var count = 0;

      do {
         console.log(count);
         count++;
      } while (count < 11);



//  while loops ----------------------------------------------
   // the code will check to see if the condition is met
      // if the condition is met the code block will execute until the while statement can no longer pass

   //preferable to a for loop when we are not certain how many times we need to iterate

   // log 0 to 10 with 'while loop'
   console.log('"while" loop count to ten --------------');

      var count2 = 0;
      while (count2 < 11) {
         console.log(count2);
         count2++;
      }



// while loops can also be used in situations where we don't deal with numbers

   // Cheer Up with 'while loop'
   console.log('"while" loop Cheer Up --------------');

   var sad = confirm('Would you like to be cheered you up?');

   while (sad) {

      alert("What do you call a boomerang that doesn't come back? .......... A stick!");
      var yes = confirm('Would you like another joke?');

      if (yes) {
         alert("What do you call a fake noodle? ......... An Impasta!");
         var yes2 = confirm('Would you like to continue to be cheered up?');

         if (yes2) {
            var response = prompt('Tell us about your struggles.', 'Type your difficulties here...');

            if (response) {
               alert('Thank you, for sharing your tribulations with us. We hope you feel better soon!');
               sad = false;
            }
         }
      }
      else {
         sad = false;
      }
   }



//  random number with functions ----------------------------------------------

let randomNum = () => {
   console.log(Math.floor(Math.random()*6)+1);
};

randomNum();


var nameArr = ['anton', 'aaron', 'ariana'];

nameArr.push('boris');

console.log(nameArr);





















   // end
