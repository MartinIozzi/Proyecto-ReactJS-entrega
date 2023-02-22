
const initialProducts = [
  { name: "Aros Roronoa Zoro", id: 0, price: 1200, stock: 10, img: "../img/aros-zoro.jpg"},
  { name: "Figura Luffy", id: 1, price: 12000, stock: 20, img:"../img/luffy-figura.jpg" },
  { name: "Collar Sombrero de Paja", id: 2, price: 4000, stock: 15, img:"../img/collar.jpg" },
  { name: "Poster One Piece", id: 3, price: 900, stock: 20, img:"../img/poster-one-piece.jpg" },
];


export const getProducts = () => {
  return new Promise((res, rej) => {

    res(initialProducts);
    ;
  });
}

export default getProducts;