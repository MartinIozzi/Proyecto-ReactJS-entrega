//productos

export const initialProducts = [
  {
    category: 'Aritos',
    name: "Aros Roronoa Zoro", id: 1, price: 1200, stock: 10, img: "../aros-zoro.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi impedit distinctio amet vero labore animi, iure dolore est ipsum magni illum corrupti recusandae rem quas. Repudiandae quidem ex accusamus?"
    
  },
  {
    category: 'Figuras',
    name: "Figura Luffy", id: 2, price: 12000, stock: 20, img: "../luffy-figura.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi impedit distinctio amet vero labore animi, iure dolore est ipsum magni illum corrupti recusandae rem quas. Repudiandae quidem ex accusamus?"
  },
  {
    category: 'Collares',
    name: "Collar Sombrero de Paja", id: 3, price: 4000, stock: 15, img: "../collar.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi impedit distinctio amet vero labore animi, iure dolore est ipsum magni illum corrupti recusandae rem quas. Repudiandae quidem ex accusamus?"
    
  },
  {
    category: 'Posters',
    name: "Poster One Piece", id: 4, price: 900, stock: 20, img: "../poster-one-piece.jpg"
  },
];


export const getProducts = () => {
  return new Promise((res, rej) => {
    res(initialProducts);
    ;
  });
}
