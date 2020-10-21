import About from './pages/About.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Home from './pages/Home.js';
import React, { useState } from 'react';

const App = () => {
  const [showHome, dynamicRender] = useState(false);

  const [footerData, setFooterData] = useState([
    {
      columnItems: [
        {
          name: 'Armory',
          url: 'https://worldofwarcraft.com/en-us/character/us/alexstrasza/sollypop',
        },
        {
          name: 'Raidbots',
          url: 'https://www.raidbots.com/simbot/quick?region=us&realm=alexstrasza&name=Sollypop',
        },
      ],
      columnName: 'Sollypop',
    },
    {
      columnItems: [
        {
          name: 'Warcraft Logs',
          url: 'https://www.warcraftlogs.com/character/us/alexstrasza/Sollypop',
        }
      ],
      columnName: 'Raiding',
    },
    {
      columnItems: [
        {
          name: 'Raider.io',
          url: 'https://raider.io/characters/us/alexstrasza/Sollypop',
        },
      ],
      columnName: 'Mythic+',
    },
    {
      columnItems: [
        {
          name: 'Dreamgrove',
          url: 'https://www.dreamgrove.gg/feral',
        },
        {
          name: 'Icy Veins',
          url: 'https://www.icy-veins.com/wow/feral-druid-pve-dps-guide',
        },
        {
          name: 'Wowhead',
          url: 'https://www.wowhead.com/feral-druid-guide',
        },
      ],
      columnName: 'Feral Kitty News',
    },
  ]);

  return (
    <>
      <Header dynamicRender={dynamicRender}/>
      {showHome ? <Home /> : <About />}
      <Footer footerData={footerData} />
    </>
  )
}

export default App;
