// 1 задача
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000)
})

p.then(() => {
    console.log('Promise resolve');
})

// 2 задача
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 3000)
})

p.catch(() => {
    console.log('Promise ERROR');
})


// 3 задача
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1');
        resolve()
    }, Math.floor(Math.random() * 5000))
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('2');
        resolve()
    }, Math.floor(Math.random() * 5000))
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('3');
        resolve()
    }, Math.floor(Math.random() * 5000))
})

Promise.all([p1, p2, p3]).then(() => {
    console.log();
})


// 4 задача
const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.json())
    .then(result => result.filter(item => item.id % 2 === 0))
    .then(result => console.log(result))



// 5 задача
const cards = document.getElementById(1)

function printCard(obj) {
    let { name, username, phone, email, website } = obj
    let userCard = document.createElement('div')
    userCard.append(`Name: ${name}, Username: ${username}, Phone: ${phone}, E-mail: ${email}, Website: ${website}`)
    cards.append(userCard)
}

const url = ('https://jsonplaceholder.typicode.com/users')
function render() {
    fetch(url)
        .then(response => response.json())
        .then(result => {
            result.forEach(i => printCard(i))
        })
}

render()


// 6 задача
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const result = await res.json()
    console.log('user', result)

    result.forEach((user) => {
        const { name, email } = user;
        const postElement = renderUser(name, email);
        document.body.append(postElement)
    });
}
getUsers()

function renderUser(name, email) {
    let container = document.createElement('div')
    const titleElement = document.createElement('h2')
    titleElement.innerHTML = name

    const bodyElement = document.createElement('p')
    bodyElement.innerHTML = email

    container.append(titleElement, bodyElement)
    return container;
}

renderUser()


// 7 задача
let container = document.getElementById('3')

function createImg(url) {
    let img = document.createElement('img')
    img.className = 'img'
    img.src = url
    container.append(img)
}

function getImg() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(result => {
            result.forEach(element => {
                createImg(element.thumbnailUrl)
            });
            container.addEventListener('click', (e) => {
                let { target } = e
                if (target.classList.contains('img')) {
                    target.classList.toggle('zoom')
                }
            })
        })
}

getImg()