import React, { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { initialProducts } from "./Promesa";

const ItemDetailContainer = ( ) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams ()

  
  useEffect(() => { //uso el useeffect para llamar a la promesa que trae los productos y los filtra
    getDetailPromise.then(data => {
      setProduct(data) //llamo a la promesa con un .then
      setLoading(false)
    })
    .catch(err =>   console.log(err) )
    
},[]) //el array de dependencias vacio indica que el useeffect se debe ejecutar una sola vez cuando carga el componente

const getDetailPromise = new Promise((res) => { //creo promesa para pedir los productos y filtrarlos
    setTimeout(() => {
      const productoFiltrado = initialProducts.find(e => e.id == id) //filtro los productos con find, buscando por el id de los params
      res(productoFiltrado) //la promesa resuelve el producto filtrado con un timeout de 2 segundos
    }, (1000));
})

  return (
    <>
      {<>{loading ? <img className="timon" src="../timon.png"></img> : <ItemDetail product={product} />}</>}
    </>
  );
};

export default ItemDetailContainer;
