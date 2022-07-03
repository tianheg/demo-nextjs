import { useState } from 'react';

function Header({ title }) {
  return (
    <h1>
      {title
        ? title
        : 'Develop. Preview. Ship. 🚀 <sup>Powered by Reactjs</sup>'}
    </h1>
  );
}

export default function HomePage() {
  const names = ['JS', 'HTML', 'CSS'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="React 💙" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
