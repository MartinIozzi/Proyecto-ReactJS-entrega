import React from "react";

const initialProducts = [
  { name: "Aros Roronoa Zoro", id: 0, price: 1200, stock: 10 },
  { name: "Figura Luffy", id: 1, price: 12000, stock: 20 },
  { name: "Collar Sombrero de Paja", id: 2, price: 4000, stock: 15 },
];

const Promesa = new Promise ((res, rej) => {
    setTimeout(() => {
        res(initialProducts);
    }, 3000)
    rej ("Error")
})

export default Promesa;