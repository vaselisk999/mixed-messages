// Yoda
let yodaMessages = [
    "Try not. Do. Or do not. There is no try. — Yoda",
    "Patience you must have, my young Padawan. — Yoda",
    "Great warrior. Hmm. Wars not make one great. — Yoda",
    "You must unlearn what you have learned. — Yoda",
    "The greatest teacher, failure is. — Yoda",
    "Death is a natural part of life. — Yoda",
    "Train yourself to let go of everything you fear to lose. — Yoda",
    "Many of the truths that we cling to depend on our point of view. — Yoda",
    "If no mistake have you made, yet losing you are, a different game you should play. — Yoda",
    "Named must your fear be, before banish it you can. — Yoda",
    "Smaller in number are we, but larger in mind. — Yoda",
    "Your path you must decide. — Yoda",
    "To be Jedi is to face the truth, and choose. Give off light, or darkness, Padawan. Be a candle, or the night. — Yoda",
    "Truly wonderful, the mind of a child is. — Yoda",
    "Size matters not. Look at me. Judge me by my size, do you? — Yoda",
    "A challenge lifelong it is, not to bend fear into anger. — Yoda"
];

const colorsArray = ["green", "red", "lime"];

const imagesArray = [
    './assets/images/yoda_03.png', 
    './assets/images/yoda_05.jpg', 
    './assets/images/yoda_07.jpg', 
    './assets/images/yoda_09.jpg', 
    './assets/images/yoda_15.jpg', 
    './assets/images/yoda_16.jpg',
    './assets/images/yoda_17.jpg',
    './assets/images/yoda_18.jpg'
]

const notification = document.getElementById('notification-wrapper');
const imageElement = document.getElementById('image');
const paragraphElement = document.getElementsByClassName('message')[0];

const generateIndex = (max) => {
    return Math.floor(Math.random() * max);
}

const createRandomContent = (index, arr) => {
    const q = document.createElement("q");
    paragraphElement.appendChild(q);
    q.textContent = arr[index];
}

const createRandomColor = (index, arr) => {
    const q = document.getElementsByTagName("q");
    q[0].setAttribute("style", "color:" + arr[index]);
}

const createRandomImage = (index, arr) => {
    imageElement.setAttribute('src', arr[index]);
}

const showNotification = () => {
    createRandomContent(generateIndex(yodaMessages.length), yodaMessages);
    createRandomImage(generateIndex(imagesArray.length), imagesArray);
    createRandomColor(generateIndex(colorsArray.length), colorsArray);

    let timeOutId = setTimeout(()=>{
        notification.classList.remove("hidden");
        notification.classList.add("visible");
        clearTimeout(timeOutId)
    }, 1000);
}

const init = () => {
    showNotification();
}

init();

