import React from "react";
import Item from "./Item";

const ItemDetail = ({ product }) => {
    return (
      <div>
        {Item}
      </div>
    );
  };

export default ItemDetail;

const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "20%",
    },
  };