let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let greetText = document.getElementById("greetText");

localStorage.setItem("greetingText", greeting);
let stringifyGreeting = localStorage.getItem("greetingText");

greetText.textContent = stringifyGreeting;