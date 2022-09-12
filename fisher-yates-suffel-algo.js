// let n = 8;
// console.log(Math.random()%n);
// for(let i = 0 ; i < n ; i++){
//     showRand(n);
// }

// function showRand(n){
//     console.log(Math.floor(Math.random() * n));
//     n-=n;
// }

// A function to print an array
// let printArray = (arr, n)=>
// {
//     ans = '';
//     for (let i = 0; i < n; i++)
//     {
//         ans += arr[i] + " ";
//     }
//     console.log(ans);
//  }
 
// // A function to generate a random
// // permutation of arr
// let randomize = (arr, n) =>
// {
 
//     // Start from the last element and swap
//     // one by one. We don't need to run for
//     // the first element that's why i > 0
//     for (let i = n - 1; i > 0; i--)
//     {
     
//         // Pick a random index from 0 to i inclusive
//         let j = Math.floor(Math.random() * (i + 1));
 
//         // Swap arr[i] with the element
//         // at random index
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
// }
 
// // Driver Code
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let n = arr.length;
// randomize (arr, n);
// printArray(arr, n);

// // Javascript implementation of the approach
 
// Function to return the next random number
// function getNum(v)
// {
//         // Size of the vector
//         let n = v.length;
      
//         // Make sure the number is within
//         // the index range
//         let index = Math.floor(Math.random() * n);
//         // let index = 0;
//         console.log("index="+index)
          
//         // Get random number from the vector
//         let num = v[index];
//         // let num = v[0];
//         console.log("num="+num);
      
//         // Remove the number from the vector
//         v[index] = v[n - 1];
//         // v.splice(n - 1,1);
//         v.pop();
      
//         // Return the removed number
//         return num;
// }
 
// // Function to generate n
// // non-repeating random numbers
// function generateRandom(n)
// {
//         let v = [];
      
//         // Fill the vector with the values
//         // 1, 2, 3, ..., n
//         for (let i = 0; i < n; i++)
//             v.push(i + 1);
      
//         // While vector has elements
//         // get a random number from the vector and print it
//         while (v.length > 0)
//         {
//             console.log(getNum(v) + " ");
//         }
// }
 
// // Driver code
// let n = 8;
// generateRandom(n);