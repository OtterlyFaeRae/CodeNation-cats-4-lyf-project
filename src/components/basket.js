import { useEffect, useState } from "react";
import {} from "./styles/basket.style";
import "../App.css";

const Basket = (props) => {
  const escapeKeyClose = (x) => {
    if ((x.charCode || x.keyCode) === 27) {
      props.onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", escapeKeyClose);
    return function cleanup() {
      document.body.removeEventListener("keydown", escapeKeyClose);
    };
  }, []);

  const deleteHandler = () => {
    setCat(Cat.filter((check) => check.id !== cat.name));
  };

  return (
    <div
      className={`basket ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className='basket-content' onClick={(x) => x.stopPropagation()}>
        <div className='basket-header'>
          <h3 className='basket-title'>{props.title}</h3>
        </div>
        <div className='basket-body'>
          {props.basket.map((cat, index) => {
            return <p num={index}>{cat.name}</p>;
          })}
        </div>
        <div className='basket-footer'>
          <button className='close-button' onClick={props.onClose}>
            Close
          </button>
        </div>
        <div>
          <button className='remove-button'>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
