let demo = document.querySelector("#demo");
let bodyStyle = document.querySelector("#bodyStyle");
let message = `
/*你好，我是一名前端新人
下面我要开始写CSS代码了*/
 * {
    margin:0;
    padding:0;
 }
 
 * {
     box-sizing:border-box;
 }

 *::after {
    box-sizing:border-box;
 }

 *::before {
    box-sizing:border-box;
 }

 #demo {
    word-break: break-all;
 }

 #box{
    width: 200px;
    height:200px;
    position:fixed;
    margin:auto;
left:0;
right:0;
top:0;
bottom:0;
    border:1px solid red;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
    // 设置背景渐变
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* CSS伪元素*/
 #box::after{
     content:'';
     display:block;
     position:absolute;
     background:#fff;
     width:50%;
     height:50%;
     top:0;
     transform: translate(50%,0%);
     border-radius:50%;
     background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
 }

 #box::before{
    content:'';
    display:block;
    position:absolute;
    width:50%;
    height:50%;
    background:#000;
    transform: translate(50%,0%);
    bottom:0;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

@media (max-width:500px){
       
}
`;
let string = '';
let n = 0;
function oneTime() {
    if (n < message.length) {
        if (message[n] === '\n') {
            string += '<br>';
        } else if (message[n] === ' ') {
            string += '&nbsp;'
        } else {
            string += message[n];
        }
        demo.innerHTML = string;
        window.scrollTo(0, 9999);
        bodyStyle.innerHTML = message.substring(0, n);
        setTimeout(() => {
            n += 1;
            oneTime();
        }, 0);
    }
}
// oneTime();

function caculateString(s) {
    let result = new Map;
    let arr = s.split('');
    arr.forEach(element => {
        if (result.get(element) === undefined) {
            result.set(element, 1);
        } else {
            let times = result.get(element) + 1;
            result.set(element, times);
        }
    });

    result.forEach(function (key, value) {
        console.log(key + '=' + value);
    });
}

// caculateString.call(null,'hi im frank fang')




function fastSort(array) {
    for (let index = 0; index < array.length - 1; index++) {
        let minIndex = findMinIndex(array.slice(index)) + index;
        swap(array, index, minIndex);
    }
    return array;
}

function swap(array, beforeIndex, afterIndex) {
    let temp = array[beforeIndex];
    array[beforeIndex] = array[afterIndex];
    array[afterIndex] = temp;
}

function findMinIndex(array) {
    let minIndex = 0;
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (array[minIndex] > array[index]) {
            minIndex = index;
        }
    }
    return minIndex;
}


function quickSort(array) {
    if (array.length === 1 || array.length === 0) {
        return array;
    }

    let pivoteIndex = Math.floor(array.length / 2);
    let pivote = array.splice(pivoteIndex, 1)[0];
    let leftArr = [];
    let rightArr = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < pivote) {
            leftArr.push(array[index]);
        } else {
            rightArr.push(array[index]);
        }
    }
    return quickSort(leftArr).concat([pivote], quickSort(rightArr));
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    let leftArr = array.slice(0, Math.floor(array.length / 2));
    let rightArr = array.slice(Math.floor(array.length / 2));
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    if (leftArr.length === 0) {
        return rightArr;
    }

    if (rightArr.length === 0) {
        return leftArr;
    }

    return leftArr[0] > rightArr[0]
        ? [rightArr[0]].concat(merge(leftArr, rightArr.slice(1)))
        : [leftArr[0]].concat(merge(leftArr.slice(1),rightArr));
}

function caculateSort(array){
    let hashTable = {},max = 0,min = 0,result = [];
    for (let index = 0; index < array.length; index++) {
        if(!(array[index] in hashTable)){
            hashTable[array[index]] = 1;
        }else{
            hashTable[array[index]] += 1;
        }
        if(array[index] > max){
            max =  array[index];
        }

        if(array[index] < min){
            min =  array[index];
        }
    }

    for (let index = min; index <= max; index++) {
        if(index in hashTable){
            for (let j = 0; j < hashTable[j]; j++) {
                const element = array[j];
            }
            result.push(index);
        }
    }
    return result;
}

let array = [-10, 2, 4, -1, -3, 8, -9];

console.log(caculateSort(array));