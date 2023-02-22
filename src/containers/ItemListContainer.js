import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
/*import Promesa from './Promesa';*/
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { name } = useParams();
    const URL = `./Promesa`;
    

    useEffect(() => {
    const getProducts = async () => {
        try {
          const res = await fetch(URL);
          const data = await res.json();
          setProducts(data);
        } catch {
          setError(true);
        }
      };
  
      getProducts();
    }, );

    return (
        <>            
        <h1 className='texto_principal'>{greeting}</h1>
        {!error ? (
        <>
          {products.length ? (
            <ItemList products={products} />
          ) : (
            <h1>Cargando...</h1>
          )}
        </>
      ) : (
        <h1></h1>
      )}
        </>
    )
}

export default ItemListContainer;

