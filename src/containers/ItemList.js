import React from "react";
import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <div style={styles.container}>
            {products.map((product) =>
                <Item key={product.id} product={product} />
            )}
    </div>
    )
  }

  
  const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "space-around",
    }
  }
  
  
export default ItemList;