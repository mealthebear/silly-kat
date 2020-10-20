import React, { useState } from 'react';

const CharacterStat = (props) => {
  return (
    <div className="stat-block">
      <p className="stat-piece">{props.statName}</p>
      <p className="stat-piece">{props.statValue}</p>
    </div>
  )
}

export default CharacterStat;
