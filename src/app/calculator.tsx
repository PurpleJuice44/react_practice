"use client";

import React, { useState } from 'react';

function Calc() {  
  const style = {
    color: 'black',
  };

  const [prevnumber, setPrev] = useState(0);
  const [number, setNumber] = useState(0);
  const [curnum, setInput] = useState("");
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onIncrease = () => {
    if(prevnumber != 0){
        setNumber(prevnumber + Number(curnum));
        setText(number.toString());
        setPrev(0);
    }
  }

  const onDecrease = () => {
    if(prevnumber != 0){
        setNumber(prevnumber - Number(curnum));
        setText(number.toString());
        setPrev(0);
    }
  }
  const onNum1 = () => {
    setInput(curnum + "1");
    setPrev(Number(curnum));
    setText(curnum + "1");
  }
  const onNum2 = () => {
    setInput(curnum + "2");
    setPrev(Number(curnum));
    setText(curnum + "1");
  }
  const onNum3 = () => {
    setInput(curnum + "3");
    setPrev(Number(curnum));
    setText(curnum + "1");
  }
  const onNum4 = () => {
    setInput(curnum + "4");
    setPrev(Number(curnum));
  }
  const onNum5 = () => {
    setInput(curnum + "5");
    setPrev(Number(curnum));
  }
  const onNum6 = () => {
    setInput(curnum + "6");
    setPrev(Number(curnum));
  }
  const onNum7 = () => {
    setInput(curnum + "7");
    setPrev(Number(curnum));
  }
  const onNum8 = () => {
    setInput(curnum + "8");
    setPrev(Number(curnum));
  }
  const onNum9 = () => {
    setInput(curnum + "9");
    setPrev(Number(curnum));
  }
  const onNum0 = () => {
    setInput(curnum + "0");
    setPrev(Number(curnum));
  }
  return (
    <div>
      <input onChange={onChange} value={text} style={style}/>
      <div>
      <button onClick={onNum1}>1</button>
      <button onClick={onNum2}>2</button>
      <button onClick={onNum3}>3</button>
      <button onClick={onNum4}>4</button>
      <button onClick={onNum5}>5</button>
      <button onClick={onNum6}>6</button>
      <button onClick={onNum7}>7</button>
      <button onClick={onNum8}>8</button>
      <button onClick={onNum9}>9</button>
      <button onClick={onNum0}>0</button>
      
      
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Calc;