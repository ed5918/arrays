// repeat all element from beginning to the midle
// swap current elemen (start + i )t with the element from the other half (end - i)
// - use temp variable to store value during swap
function inPlace(arr){
    for(let i = 0; i < arr.length / 2; i++){
        let k = arr.length - 1 - i;
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;

    }
    console.log(arr.join(' '));
}
inPlace([10,20,30,40,50,60,70]);
// inPlace([10,20,30,40,50,60]);


// [10,20,30,40,50,60,70] // 7 -> 3.5
// [10,20,30,40,50,60] // 6 -> 3
// //0  1  2  3  4  5  6
// /*

// 0....length
// i < lenngth/2
// 0 --> 6
// 1 --> 5
// 2---->4
// 3---->3

// let k = length - 1 - i
// /*