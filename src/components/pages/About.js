import axios from 'axios';
import React, { useState } from 'react';

const About = () => {
  const getCat = async () => {
    let response = await axios.get('api/cats');
    let catPicture = response.data;
    let catImage = document.createElement('IMG');
    catImage.classList.add("cat-photo");
    catImage.src = catPicture;
    document.getElementById('cat-pictures-section').appendChild(catImage);
  }

  return (
    <div>
      <section className="about-me-section common-section">
        <img 
          alt="Black cat lying on back with tongue out and paws up" 
          className="cute-cat-photo"
          src="../../../public/images/cute-cat.jpg"
        />
        <p className="about-text">WoW is one of my favorite video games to play. I have a few characters, but feral druid
        is my most favorite spec!<br /><br />
        Some people call me the Feral Queen, but me just ordinary cat:
        I scratch, I claw, and I put da paw.<br /><br />
        Besides that, I really love animals and it's no secret
        that I luv cute cats :D 
        </p>
      </section>

      <section className="common-section get-cats-section">
        <h3 className="get-cats-title">
          Are you someone who also <span className="pink-text">loves</span> cute cats?<br />
          Click the button below to get some!
        </h3>
        <div className="get-cats-button" onClick={getCat}>Nya nya nya!</div>
      </section>

      <section id="cat-pictures-section">

      </section>
    </div>
  )
}

export default About;
