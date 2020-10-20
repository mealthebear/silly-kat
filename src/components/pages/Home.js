import CharacterStat from '../CharacterStat.js';
import React, { useState } from 'react';

const Home = () => {
  const [userStats, setUserStats] = useState([
    {
      statName: "Ny'alotha, the Waking City",
      statValue: "7/12 M",
    },
    {
      statName: "Raider.io Mythic+ Score",
      statValue: "3,290",
    },
  ]);

  return (
    <>
      <section className="common-section">
        <div className="space-cat-container">
          <img 
            alt="Cat looking into space" 
            className="space-cat-photo" 
            src="../../../public/images/space-kat.jpg" 
          />
          <p className="space-cat-text">Me be fuzzy cat<br/>looking at the pretty lights</p>
        </div>
      </section>

      <section className="common-section intro-paragraph">
        <h2 className="section-title">Who Dat Kat?</h2>
        <p className="intro-text">Oh hellos! My name is Solly and welcome to my website!<br/>
        I hope you like all the colors and pictures here.<br/> I luv luv luv
        to play Feral Druid and enjoy Mythic Raiding and doing keys ^.^
        </p>
      </section>

      <section className="common-section stat-section">
        <h2 className="section-title">Solly Stats in Battle for Azeroth Season 4</h2>
          {userStats.map((stat, index) => {
            return <CharacterStat key={index} statName={stat.statName} statValue={stat.statValue}/>
          })}
      </section>

    </>
  )
}

export default Home;
