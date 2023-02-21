import React from 'react';
import {question} from './Api';
import { useState } from 'react';
import MyAccordion from './MyAccordion';

const Accordion = () => {
  const [data,setData] =useState(question)
  return (
    <>
    <div><h3>Question Answer of React</h3>
   
   {data.map((curElem)=>{
     const {id}=curElem;
     return < MyAccordion key={id}{...curElem}/>
   })}
    
    </div>
    </>
  )
}

export default Accordion