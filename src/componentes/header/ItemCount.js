import { useEffect, useState } from "react";

const ItemCount = ({onAdd, stock}) => {

  const initial = 1
  const [count, setCount] = useState(initial);

  useEffect(() => {

  }, [count]);
  
    const removeHandler = () => {
      if (count > 1) {
        setCount(count - 1);
    }}

  const addHandler = () => {
    if (count < stock) {
      setCount(count + 1);
  };
}

  return (
    <>
      <div className="Itemcount">
        <div className='ItemCount-add'>
        <button onClick={removeHandler} >  {" "}
          -{" "} 
        </button>
        <strong className="count"> {count} </strong>
        <button className="addButton" onClick={addHandler} >
          {" "}
          +{" "}
        </button>
        </div>
        <button className="boton-carrito" onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  )
}

export default ItemCount;