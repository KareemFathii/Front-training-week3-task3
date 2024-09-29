// problem number 1 Filtering an Array

let arr4 = [1,2,3,4,5,6,7,8,9,10,11,12] ;
let filteredarr = arr4.filter(item => item % 2 === 0)
console.log(filteredarr)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// problem number 2 Find the Largest Number 
let maxNum = 0 ;
let arr = [10,220,30,450,50,600,70,63,90,100] ;
//solution 1
maxNum = Math.max( ...arr)
console.log(maxNum)


// solution 2
// for (let i = 0 ; i < arr.length  ; i++){
//     if(arr[i] > maxNum)
//         maxNum = arr[i]
// }
// console.log(maxNum)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// problem number 3  Reverse a String

let str = "hello"
 // --> first and easy solution
let strarray = str.split("").reverse().join("")    

// another solution from scratch

  // let strarray = str.split("")  
// let reversedStrarray =[]
// for(let i = strarray.length , j=0;  i>=0 ; i--){
//     reversedStrarray[j] = strarray[i];
//     j++;
// }
// reversedStrarray = reversedStrarray.join("")
// console.log(reversedStrarray)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// problem number 4  Remove duplicates from an array

let arr1 = [1,2,3,4,5,6,6,8,8,4,3,9,2,10]
let arr2 =[]

// solution 1 
for(let i = 0 ; i < arr1.length ; i++){
        if(!arr2.includes(arr1[i])){
            arr2.push(arr1[i])
        }
}
console.log(arr2)



// solution 2 
// for(let i = 0 ; i < arr1.length ; i++){
//     let found = false
//     for (let j = 0 ; j < arr2.length ; j++){
//         if(arr1[i] === arr2[j]){
//             found = true
//             break
//         }
//     }
//         if(!found)
//         arr2.push(arr1[i])
// }
// console.log(arr2)