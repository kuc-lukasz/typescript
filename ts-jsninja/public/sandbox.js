"use strict";
const anchor = document.querySelector("a");
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const amount = document.querySelector("#amount");
const fromWho = document.querySelector("#tofrom");
console.log(form.children);
let arr = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let invoice;
    invoice = (client, details, amount) => {
        return `${client} owes ${amount}EUR for ${details}`;
    };
    arr.push({ to: fromWho.value, amount: amount.valueAsNumber });
    console.log(arr);
});
