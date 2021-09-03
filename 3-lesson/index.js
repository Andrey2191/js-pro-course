// 1 задача
class Count {
    constructor(count){
        this.count = count
    }

    increment() {
        return ++this.count
    }

    decrement() {
        return --this.count
    }
}







// 2 задача
class Worker {
    constructor(name, secondName, rate, days, countOfDetails) {
        this.name = name,
        this.secondName = secondName,
        this.rate = rate,
        this.days = days,
        this.countOfDetails = countOfDetails
    }

    getSalary() {
        return this.rate * this.days
    }

    getName() {
        return this.name
    }

    getSecondName() {
        return this.secondName
    }

    getRate() {
        return this.rate
    }

    getDays() {
        return this.days
    }

    setRate() {
        return this.rate = newRate
    }

    setDays() {
        return this.days = newDays
    }

    increaseCount() {
        ++this.countOfDetails
    }

    resetCount() {
        this.countOfDetails = 0
    }
}





// 4 задача

class MyString {
    reverse(str) {
        return str.split('').reverse().join('')
    }

    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1)
    }

    ucWords(str) {
        return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    }
}



// 5 задача
class User {
    constructor(name, surName, email) {
        this.name = name,
        this.surName = surName,
        this.email = email
    }

    getFullName() {
        return `Полное имя: ${this.name} ${this.surName}`
    }

    getEmail() {
        return `Почта: ${this.email}`
    }
}


// 6 задача 
class Student extends User {
    constructor(name, surName, year) {
    super(name, surName)
    this.year = year
    }

    getCourse() {
        let currentYear = new Date().getFullYear()
        return currentYear -this.year
    }
}

