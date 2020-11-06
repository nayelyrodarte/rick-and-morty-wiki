import React from 'react';

function CharacterCard({ character }) {
  const { name, image, status, species, location } = character;

  return (
    <div>
      <ul>
        <img src={image} alt={`${name} avatar`} />
        <p>{name}</p>
        <p>{status}</p>
        <p>{species}</p>
        <p>{location.name}</p>
      </ul>
    </div>
  );
}

export default CharacterCard;
