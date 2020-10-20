import React, { useState } from 'react';

const Home = () => {
  return (
    <>
      <section className="generic-section">
        <div className="space-cat-container">
          <img 
            alt="Cat looking into space" 
            className="space-cat-photo" 
            src="../../../public/images/space-kat.jpg" 
          />
          <p className="space-cat-text">Me be fuzzy cat<br/>looking at the pretty lights</p>
        </div>
      </section>

      <section className="generic-section intro-paragraph">
        <h2 className="intro-title">Who Dat Kat?</h2>
        <p className="intro-text">Oh hellos! My name is Solly and welcome to my website!
        I hope you like all the colors and pictures here. I luv luv luv
        to play Feral Druid and enjoy Mythic Raiding and doing keys ^.^
        </p>
      </section>

    </>
  )
}

export default Home;
