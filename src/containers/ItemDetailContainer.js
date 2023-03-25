import React, { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {db} from '.././firebase/firebase';
import {doc, getDoc, collection} from 'firebase/firestore'

const ItemDetailContainer = ( ) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams ()

  
  useEffect(() => {
    setTimeout(() =>{
      const productsCollection = collection(db,'productos');
      const refDoc = doc(productsCollection,id)
      getDoc(refDoc).then(
        (data)=>{
          setProduct({
            id:data.id,
            ...data.data(),
          });
        }
      )
      .finally(()=>{ 
        setLoading(false);
      })
  },[1000])

    })

  return (
    <>
      {<>{loading ? <img className="timon" src="../timon.png"></img> : <ItemDetail product={product} />}</>}
    </>
  );
};

export default ItemDetailContainer;
