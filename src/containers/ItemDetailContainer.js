import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect((getProduct) => {
        getProduct().then(Item => {
            setProduct(Item)
        }).catch(err => {
            setLoading(false)
            console.log(err)
            getProduct();
        })
    })

    return (
        <>
          {<>{loading ? <img className='timon' src='../../timon.png'></img> : <ItemDetail product={product} />}</>}
        </>
      );
}

export default ItemDetailContainer