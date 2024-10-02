const people = [
  'Creola Katherine Johnson: mathematician', // all element here need to have a unique key
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() { // transform array of table into array of list item
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

// Warning in console: Each child in a list should have a unique "key" prop.