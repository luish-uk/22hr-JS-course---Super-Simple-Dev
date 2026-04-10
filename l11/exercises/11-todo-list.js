// 11a
let array = [10, 20, 30];
console.log(array);
array[array.length-1] = 99;
console.log(array);

//11b
function getLastValue(array) {
    return array[array.length-1];
}
    
console.log(getLastValue(array));

//11c
function arraySwap(array) {
    const firstValue = array[0];
    const lastValue = array[array.length-1];
    array[0] = lastValue;
    array[array.length-1] = firstValue;
    return array;
}


console.log(arraySwap(array));

//11d
for (let i = 0; i <= 10; i+=2) {
    console.log(i);
}

//11e
for (let i = 5; i >= 0; i-=1) {
    console.log(i);
}

//11f
let i = 0
while (i<= 10) {
    console.log(i);
    i+=2;
}

i = 5;
while (i >= 0) {
    console.log(i);
    i-=1;
} 
//11g
console.log(array)
for (item in array) {
    array[item] = array[item]+1;
}
console.log(array);
//11h
function arrayOne(array) {
    for (item in array) {
        array[item] = array[item]+1;
    }
    return array;
} 

let array1 = [1, 2, 5];
let array2 = [2, 65, 1, 34];

console.log(arrayOne(array1));
console.log(arrayOne(array2));
//11i
function addNum(array, num) {
    for (item in array) {
        array[item] = array[item]+num;
    }
    return array;
}
//11j 
function addArrays(array1, array2) {
    let smallestArray;
    let array3 = [];
    if (array1.length < array2.length) {
        smallestArray = array1;
    } else {
        smallestArray = array2;
    }
    for (item in smallestArray) {
        array3[item] = array1[item]+array2[item];
    }
    return array3;
}

console.log(array1);
console.log(array2);
console.log(addArrays(array1, array2));


//11k
function countPositive(nums) {
    let positiveNums = 0;
    for (item in nums) {
        if (nums[item] > 0) {
            positiveNums++;
        }
    }
    return positiveNums;
}

console.log(countPositive(array2));

// const todoList = ["Make dinner", "Wash dishes"];

// renderTodoList();

// function renderTodoList() {
//     let todoListHTML = '';

//     for (let i = 0; i < todoList.length; i++) {
//         const todo = todoList[i];
//         const html = `<p>${todo}</p>`;
//         todoListHTML += html;
//     }
//     console.log(todoListHTML)

//     document.querySelector('.js-todo-list').innerHTML = todoListHTML;

// }

// function addTodo() {
//     const inputElement = document.querySelector('.js-name-input');
//     const name = inputElement.value;
//     todoList.push(name);
//     console.log(todoList);
//     inputElement.value = '';

//     renderTodoList();
// }
