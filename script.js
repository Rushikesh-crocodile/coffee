let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});



//databaseConfiguration

const firebaseConfig = {
    apiKey: "AIzaSyDo68Rpzp0pLfU3_bGeprZ7CMWhIt7vtTY",
    authDomain: "coffee-6deb1.firebaseapp.com",
    databaseURL: "https://coffee-6deb1-default-rtdb.firebaseio.com",
    projectId: "coffee-6deb1",
    storageBucket: "coffee-6deb1.appspot.com",
    messagingSenderId: "22021485764",
    appId: "1:22021485764:web:3826d66f07b28abcbbc591",
    measurementId: "G-H2S4EDB3MM"
  };

firebase.initializeApp(firebaseConfig); //init
var orderformDB=firebase.database().ref('orderform') //ref
document.getElementById("orderform").addEventListener("submit",submitform);

function submitform(e){
    e.preventDefault();

    var name=getElementVal('nameop');
    var email=getElementVal('email');
    var numberphone=getElementVal('numb');
    var messagebook=getElementVal('messagebook');

    saveMessage(name,email,messagebook,numberphone);
    //console.log(name,email,number.messagebook);
}

const saveMessage=(name,email,numberphone,messagebook)=>{
    var neworderform=orderformDB.push();

    neworderform.set({
        name:name,
        email:email,
        messagebook:messagebook,
        numberphone:numberphone,

    })
}

const getElementVal = (id) => {
     return document.getElementById(id).value;
}
