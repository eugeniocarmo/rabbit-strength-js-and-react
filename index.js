import './style.css';
import Rabbit from './rabbit.js';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Rabbit Strengh</h1>`;

const robertRabbit = new Rabbit(30);
const rabbitStrengh = robertRabbit.declareStrengh();
const rabbitStrenghElement = document.createElement('p');
rabbitStrenghElement.textContent = rabbitStrengh;
appDiv.appendChild(rabbitStrenghElement);


// Same code if done in React

// import './style.css';
// import React, { useState, useEffect } from 'react';
// import Rabbit from './rabbit.js';

// function App() {
//   const [rabbitStrength, setRabbitStrength] = useState('');

//   useEffect(() => {
//     const robertRabbit = new Rabbit(30);
//     const strength = robertRabbit.declareStrengh();
//     setRabbitStrength(strength);
//   }, []);

//   return (
//     <div>
//       <h1>Rabbit Strengh</h1>
//       <p>{rabbitStrength}</p>
//     </div>
//   );
// }

// export default App;
