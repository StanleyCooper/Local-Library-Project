import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div className="App">
      <h1>react practice</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <button type="button">
              {post.body}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
