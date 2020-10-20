import React, { useState } from 'react';

const Home = () => {
  return (
    <section>
      <div className="space-cat-container">
        <img 
          alt="Cat looking into space" 
          className="space-cat-photo" 
          src="../../../public/images/space-kat.jpg" 
        />
        <p className="space-cat-text">Me be fuzzy cat<br/>looking at the pretty lights</p>
      </div>
    </section>
  )
}

export default Home;
