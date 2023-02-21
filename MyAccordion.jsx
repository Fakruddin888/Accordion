import React from 'react';
import { useState } from 'react';

const MyAccordion = ({question,answer}) => {
  const [show,setShow]=useState(false)
  return (
    <>
    <div>
<p onClick={()=>setShow(!show)}><span>{question}</span>{show?"-":"See Answer"}</p>
     
    </div>
    {show && <p>{answer}</p>}
    </>
  )
}

export default MyAccordion;