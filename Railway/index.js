// import { JSDOM } from 'jsdom';

// const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
// const { document } = dom.window;



let counter = 0;


function increment(){
    counter+=1;
    document.getElementById("count-el").innerText = counter;
    // return counter;
}

function decrement(){
    counter -= 1;
    if(counter >= 0){
    document.getElementById("count-el").innerText = counter;
    }
    else{
        counter= 0;
    }
    // return counter;
}

// let saveEl = document.getElementById("save-el").textContent;

function save(){
    //change InnerText to textContext because innerText sometimes finds it difficult with some outputs for the human readability
        document.getElementById("save-el").textContent += counter +" - ";
        counter = 0;
        document.getElementById("count-el").innerText = counter;
}















// this is for scramble
// let welcomeEl = document.getElementById("welcome-el");

// let name = "Safo Samson";
// let greeting = "Good morning"

// function welcomeUser(){
// welcomeEl.InnerText = greeting + ", welcome back " + name;
// }