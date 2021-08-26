// 1 задача
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => num * num)


// 2 задача
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].reduce((sum, a) => sum + a, 0)



// 3 Задача
function setColon(num) {
    let array = num.toString().split('')
    for (i = 1; i < array.length; i++) {
        if (array[i - 1] % 2 && array[i] % 2) {
            array.splice(i, 0, ':')
        }
    }
    return array.join('')
}

// 4 задача
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrRes = []
let length = arr1.length < arr2.length ? arr1.length : arr2.length
for (let i = 0; i < length; i++) {
    arrRes.push(arr1[i] - arr2[i])
}


// 5 задача 
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrRes = []
let length = arr1.length < arr2.length ? arr1.length : arr2.length
for (let i = 0; i < length; i++) {
    arrRes.push(arr1[i] + arr2[i])
}


// 6 задача
function reverseArr(arr) {
    let newArr = arr.reverse()
    return newArr
}


// 7 задача 
let users = [{ name: 'Ivan', age: 18 }, { name: 'Petr', age: 12 }, { name: 'Sidor', age: 25 }, { name: 'Vova', age: 14 }, { name: 'Andrey', age: 29 }, { name: 'Dima', age: 23 },]

function filterUsers(users) {
    let adults = []
    let minor = []
    users.forEach(user => {
        if (user.age >= 18) {
            adults.push(user)
        } else {
            minor.push(user)
        }
    });
    return { adults, minor }
}
let { adults, minor } = filterUsers(users)


// 8 задача 
let arr = [1, 1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9]
let newArr = []
arr.forEach((item) => {
    if (!newArr.includes(item)) {
        newArr.push(item)
    }
})


// 9 задача
let palindrom = (str) => str === str.split('').reverse().join('')


// 10 задача
function findIndex(arr, element) {
    let result = -1
    arr.forEach((el, index) => {
        if (el === element) {
            result = index
        }
    });
    return result
}


// 11 задача
function search(arr, str) {
    return arr.filter(item => item.toLowerCase().includes(str.toLowerCase()))
}


// 12 задача

function compareArr(arr1, arr2) {
    let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length
    for (let i = 0; i <= maxLength; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}
