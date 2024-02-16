const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Person Name's Todos</h1>
      <img className="avatar"
      src={baseUrL + person.imageId + person.imageSize + '.jpg'}
      alt={person.name}
      />
    </div>
  );
}

// baseURL + imageID + imageSize + .jpg
// Person's Name