/* Activate strict mode */
'use strict';

function cutFruit (fruit){
    return fruit * 2;
}

function fruitProcessor (apples, oranges){
    let applePieces = cutFruit(apples);
    let orangePieces = cutFruit(oranges);

    let juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
 console.log(fruitProcessor(4,15));

 /* Calculate your age */

 function calcAge1(birthYear){
     let today = new Date();
     let year = today.getFullYear();

     const age = year - birthYear;

     return age;
 }
 console.log(calcAge1(1994) + " years old"); /* Invoke the function */

 /* Arrow functions */

 const yearToRetire = (birthYear, firstName) => {
    let today = new Date();
    const age = today.getFullYear() - birthYear;

    const toRetire = 65 - age;
    
    if(toRetire > 0){
        console.log(`${firstName} retires in ${toRetire} years`);
        return toRetire;
    }else{
        console.log(`${firstName} has already retired`);
        return -1;
    }

 }
 console.log(yearToRetire(1998, 'Collins'));

/* Tip Calculator practice */

let tip = 0.15;
let bill = 430;

if (bill > 50 && bill <= 300){
    tip = tip * bill;
    console.log( `The bill was ${bill}, the tip was ${tip}, and the total is ${tip + bill}`);
}else if(bill > 300){
    tip = 0.2 * bill;
    console.log( `The bill was ${bill}, the tip was ${tip}, and the total is ${tip + bill}`);
}else{
    console.log('Your bill was less than 50');
}

/* Coding challenge - Functions #1 */


const calcAverage = (a, b, c) => (a + b + c) / calcAverage.length;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

    function checkWinner(avgDolphins, avgKoalas ){
        if (avgDolphins >= 2 * avgKoalas){
            return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
        }else if(avgKoalas >= 2 * avgDolphins){
            return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
        }else{
            return 'Cannot find a winner'
        }
       
    }

console.log(checkWinner(scoreDolphins, scoreKoalas));


/* Coding challenge #2 */


function calcTip(bill){
    if(bill >= 50 && bill <= 300){
        let tip = bill * 0.15;
        return `Your bill is $${bill} and tip is $${tip}, therefore the total is $${bill + tip}`;
    }else{
        tip = bill * 0.2;
        return `Your bill is $${bill} and tip is $${tip}, therefore the total is $${bill + tip}`;
    }
}
console.log(calcTip(600));

/* Loop through an array */

let bills = [125, 555, 44];
let tips = [0.15, 0.2];

let calcTotal = bills.forEach(function(bill){
    if(bill >= 50 && bill <= 300){
        console.log( `Your tip is ${bill * tips[0]}`);
    }else{
        console.log( `Your tip is ${bill * tips[1]}`);
    }
    })


/* Replace HTML elements using the DOM - Javascript */

// document.addEventListener("DOMContentLoaded", function(event){
//     function replacePare(){
//         let cartSrt = document.getElementsByClassName('product-name')[0].querySelector('a').innerHTML;
//         console.log(cartSrt);
//         let newSrt = cartSrt.toString().replaceAll('(','').replaceAll(')','');

//         document.getElementsByClassName('product-name')[0].querySelector('a').innerHTML = newSrt;
//     }
//     console.log(replacePare());
//     replacePare();
// });

document.addEventListener("DOMContentLoaded", function(event){
    function replacePare(){
        let cartSrts = document.getElementsByClassName('product-name');

        for (let i = 0; i < cartSrts.length; i++) {
            const link = cartSrts[i].querySelector('a');
            link.innerHTML =    link.innerHTML.toString().replaceAll('(','').replaceAll(')','');   
            
            // console.log(("the updated link is ", link))
        }
            // cartSrts = Array.from(cartSrts);

            // cartSrts.forEach(function(row){
            //     row = row.querySelector('a');  /// Samaki
            //     row.innerHTML = row.innerHTML.toString().replaceAll('(','').replaceAll(')','');
            //     // console.log(row);  
                
            // });
            
        };

        replacePare();
  
    });

