import Profile from './profile.js'

export default function Gallery() { // default: can only export 1 function. export defaulted for component
  return (
    <div>
      <h1>Profiles: </h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}
