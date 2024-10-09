import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Ranjani Shettar',
    artwork: {
      title: 'Aureole',
      city: 'Bangalore',
      image: 'https://i.imgur.com/okTpbHhm.jpg',
    }
  });

  function handleCityChange(e: { target: { value: string; }; }) { // construct a new object to replace the old one
    // incorrect way:
    // person.artwork.city = e.target.value;
    // setPerson(person);
    /**
    const nextArtwork = {
      title: e.person.title,
      artwork: e.person.artwork,
      image: e.person.image,
      city: e.target.value
    }
     */
    const nextArtwork = { ...person.artwork, city: e.target.value }; // first make a copy: everything is the same except city is changed
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }


  return (
    <>
      <img src={person.artwork.image}/>
      <label>
        City:
        <input
          value={person.artwork.city} // get input from user
          onChange={handleCityChange} // read new info from user
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
