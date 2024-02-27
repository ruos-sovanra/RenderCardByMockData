"use strict";

import cardComponent from "../components/cardComponent.js";
import proFileComponent from "../components/profileComponet.js";
let renderProfile = document.querySelector("#renderProfile");
let render = document.querySelector("#render");
const base_URL = "http://127.0.0.1:5500/data/";

// Fetch Data function
async function getCards(endpoint) {
  try {
    const response = await fetch(`${base_URL}${endpoint}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Render Products Card
const products = await getCards("products");

products.map((product) => {
  render.innerHTML += cardComponent(product);
});

// Render Profile Card
const users = await getCards("users");
users.map((user) => {
  renderProfile.innerHTML += proFileComponent(user);
});
