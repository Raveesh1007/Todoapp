import React, { useState } from 'react';

export function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <input
        id="title"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> <br />
      <input
        id="description"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /> <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: title,
              description: description,
            })
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error("Error creating todo:", error));
        }}
      >Add a todo</button>
    </div>
  );
}
