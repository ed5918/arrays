// function sum (input){
//   let first = input[0];
//   let last = input[input.length -1];

//   console.log(first + last);
// }
// sum([20, 30, 40]);

// Day of week
// function weekDay(day){

// Write a program, which receives a number and prints the corresponding name of the day of the week (in English).  
// If the number is NOT a valid day, print: "Invalid day!".
// Examples
// Input	Output
// 3 --->	Wednesday
// 6 --->	Saturday
// 11 --->	Invalid day!

// write if the number is within the week range <1 or > 7 then invalid
// if(day < 1 || day > 7){
//     console.log('Invalid day!');
// }
// switch(day){
//     case 1:
//      console.log('Monday');
//          break;
//     case 2: 
//     console.log('Tuesday');
//         break ;
//     case 3: 
//     console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday'); 
//         break;
//     case 5:
//         console.log('Friday');
//          break;
//     case 6: 
//     console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
   
// }
// // check each day of the week 

// }
// weekDay(3);
// weekDay(5);
// weekDay(8);
// weekDay(7);

function dayOfWeek(day){

    let week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    if(day >= 1 && day <= 7){
        console.log(week.length);
    }else{
        console.log("Invalid day!");
    }
}
dayOfWeek(3);