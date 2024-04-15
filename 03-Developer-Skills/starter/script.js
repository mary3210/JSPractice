// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = "23";
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(1991));

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem
// what is temp amplitude? answer: difference between highest and
//lower temp
//- how to compute max and min temperatures?
//- what's a sensor error? and what to do when it happens? ignore it
//2) Breaking up into sub-problems
// - how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it?

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if( typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max);
//   console.log(min);
//   return max - min;
// };


// const amplitude = calcTempAmplitude(temperatures)
// console.log(amplitude);

//Problem 2:
// Function should now receive 2 arrays of temps:
// 1) Understanding the problem
// How do i fit a second array in the function?
// with 2 arrays, should we implement the functionality twice? No
//Just merge two arrays into one

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//     const array1 = ['a', 'b', 'c'];
//     const array2 = ['d','e', 'f'];
//     const array3 = array1.concat(array2)

//     const temps = t1.concat(t2);
//     console.log(temps);


//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//       const curTemp = temps[i];
//       if( typeof curTemp !== 'number') continue;
//       if (curTemp > max) max = curTemp;
//       if (curTemp < min) min = curTemp;
//     }
  
//     console.log(max, min);
    
//     return max - min;
//   };

//   const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9,0,5])
// console.log(amplitudeNew);



const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: 10,
        //C) FIND
    //     value: Number(prompt('Degrees celsius')),
    }
     
    // B) FIND
    console.table(measurement)
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;

}
// A) IDENTIFY THE BUG
console.log(measureKelvin());

//using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d','e', 'f'];
    const array3 = array1.concat(array2)

    const temps = t1.concat(t2);
    console.log(temps);


    let max = 0;
    let min = 0;
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if( typeof curTemp !== 'number') continue;
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
  
    console.log(max, min);
    
    return max - min;
  };

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9,4,5])

// A) IDENTIFY
console.log(amplitudeBug);

//----------------------------------------------------------------------
// A) how will I loop over the temps.
//what method will i use to combine strings
// - Array transformed to string, separated by ...
// -  What is the x days? index + 1
//B) for loop, and concatonation with interpolation.
// - Transform array into string
// - Transform each element to string with c
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

let data1 = [17, 21, 23]
function printForecast(arr){
  let result = '... '
  for(let i = 0; i < arr.length; i++){
    result+= `${arr[i]}C in ${i + 1} days ... `
  }
  return result
};

const data = printForecast(data1)
console.log(data)