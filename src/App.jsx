import { useState } from 'react';
import puppyList from './data.js';
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [ourPupId, setOurPupId] = useState(null);
  const ourPuppy = puppies.find((pup) => pup.id === ourPupId)
  //console.log(ourPuppy);

  return (

    <div>
      {
        puppies.map((puppy) => {
          return <p onClick={() => {setOurPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
      }

      {ourPupId && (
        <div>
          <h2>{ourPuppy.name}</h2>
          <ul>
            <li>Age: {ourPuppy.age}</li>
            <li>Email: {ourPuppy.email}</li>
            <img src="https://thebernedoodles.com/wp-content/uploads/2024/02/Mini-Bernedoodle-Home-Page-Cutout-with-White-Border-2.webp" />
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
