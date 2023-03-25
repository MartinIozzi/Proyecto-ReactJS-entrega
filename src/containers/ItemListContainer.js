import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {db} from '.././firebase/firebase';
import {getDocs, collection, query, where} from 'firebase/firestore'


//en caso de error mostraría lo que sería la pantalla de carga a suceder

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const {name} = useParams();
  
  
  useEffect(() => {
    const productsCollection = collection(db, 'productos');
    const productList = name
     ? query(productsCollection, where('category','==', name))
     : productsCollection

    getDocs (productList)
    .then((data)=>{
      const list = data.docs.map ((product) => {
        return {
          ...product.data(),
          id: product.id,
        }
      });
      setProducts(list)(data.filter(product => product.category == name));
    }
    ).catch(() => {setError(true)})
  }, [])
  /*
  getProducts().then(Item => {
    setProducts(Item)
  }).catch( err => {
    setError(false)
  })
  */

  return (
    <>
    <div style={styles.font}>
    {greeting} 
    </div>
      <ItemList products={products} />
    </>
  )
}

const styles = {
  font: {
    fontSize: 40,
    marginLeft: 60,
    }
}

export default ItemListContainer;

