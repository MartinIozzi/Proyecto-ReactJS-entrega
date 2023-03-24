import { useEffect, useState } from "react";

const ItemCount = ({onAdd}) => {
  

  const initial = 1
  const stock = 10
  const [count, setCount] = useState(initial);


  useEffect(() => {

  }, []);

  useEffect(() => {

  }, [count]);

  const addHandler = () => {

    setCount(count + 1);
  };
  const removeHandler = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      <div className="Itemcount">
        <div className='ItemCount-add'>
        <button className="removeButton" onClick={removeHandler}>  {" "}
          -{" "} 
        </button>
        <strong className="count"> {count} </strong>
        <button className="addButton"  onClick={addHandler} >
          {" "}
          +{" "}
        </button>
        </div>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        <button >Finalizar Compra</button>
      </div>
    </>
  );
};

export default ItemCount;
