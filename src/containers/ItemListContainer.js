import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from './Promesa';
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();
  const URL = `./Promesa`;

  useEffect(() => {
    getProducts().then(Item => {
      setProducts(Item)
    }).catch(err => {
      setError(false)
      console.log(err)
    })
  }, [])

  return (
    <>
      {!error ? (
        <>
          {products.length ? (
            <ItemList products={products} />
          ) : (
            <>
            <img className='timon' src='../../timon.png'></img>
            </>
          )}
        </>
      ) : (
        <h1>Error de carga</h1>
      )}
    </>
  )
}

export default ItemListContainer;

