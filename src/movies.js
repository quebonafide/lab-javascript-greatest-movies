const utils = require('./data.js');
// Iteration 1: All directors? - Get the array of all directors.
//console.log(utils.movies);
function getAllDirectors(array) {
    const newArray = array.map(element =>  element.director)
    return newArray;
}
//console.log(getAllDirectors(utils.movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    const newArray = array.filter(function (em) {
        if (em.director === "Steven Spielberg" && em.genre.includes("Drama")) {
            return true;
        }
    })
    return newArray.length;
}
//console.log(howManyMovies(utils.movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(array) {
    let avgSum = 0;
    for (element of array) {
        if ("rate" in element) {
            avgSum += element.rate;
        }
    }
    if (avgSum != 0) {
        return (Math.round(avgSum/(array.length)*100)/100);
    }
    else return 0;
}
//console.log(ratesAverage(utils.movies));
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const drama = array.filter(function (em) {
        if (em.genre.includes("Drama")) {
            return true;
        }
    })
    let avgSum = 0;
    for (element of drama) {
        if ("rate" in element) {
            avgSum += element.rate;
        }
    }
    if (avgSum != 0) {
        return (Math.round(avgSum/(drama.length)*100)/100);
    }
    else return 0;
}

//console.log(dramaMoviesRate(utils.movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear (array) {
    const clone = JSON.parse(JSON.stringify(utils.movies)); 
    clone.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        }
        else if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            }
            else return -1;
        }
        else return -1;
    })
    return clone;
}


console.log(Array.isArray(orderByYear(utils.movies)));     //I return an array but jasmine is still unhappy, I'm beginning to think she is out to get me

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
