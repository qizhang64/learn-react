export default function Bio() {
  return ( // it try to return two components, not one -> enclose into a bigger one
    <div>
    <div className="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p className="summary">
      You can find my thoughts here.
      <br/><br/>
      <b>And <i>pictures</i></b> of people!
    </p>
    </div>
  );
}