//Sum of Digit is Pallindrome or not
let input = [12, 41, 56, 98];
let addedArray = new Array();
for (let i = 0; i < input.length; i++) {
    let currentStr = input[i].toString();
    let total = 0;
    for (let j = 0; j < currentStr.length; j++) {
        total += parseInt(currentStr[j]);
    }
    addedArray[i] = total.toString();
}
for (let k = 0; k < addedArray.length; k++) {   
    let left = 0;
    let right = addedArray[k].length-1;
    let palindrome = '';
    while (left < right || left == right) {
        if (addedArray[k][left] == addedArray[k][right]) {
            palindrome = "YES";
        } else {
            palindrome = "NO";
        }
        left += 1;
        right -= 1;
    }
    console.log(palindrome);
}