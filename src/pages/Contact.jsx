import { useState } from 'react';
import React from 'react';
import Footer from '../layout/Footer';

const Contact = () => {

  const [state,setstate] = useState(0);
  const [teks,settek] = useState("");

  return(
    <div className='h-full flex flex-col justify-between'>
      <div className="main">
        <input type="text" id="inp" className='bg-white text-black' />
        <button type='submit' onClick={() => settek(document.getElementById("inp").value)}>cek</button>
        <p>{teks}</p>
        <p>{state}</p>
        <button onClick={() => setstate(state + 1)  }>plus</button>
        <button onClick={() => setstate(state - 1)  }>min</button>

        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2">Email: example@email.com</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;