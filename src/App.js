import { useReducer } from 'react';
import './App.css';

function App() {
  const [count, countDispatch] = useReducer(countReducer, 0) 
  // {count} est le state qui va commencer à 0
  // le reducer(fonction) sert à modifier en fonction d'une action
  // dispatch (function)va permettre d'envoyer une action au reducer


  console.log(count);

  function countReducer(state, action){ // Attention l'ordre des paramètres IMPORTANT d'abord state puis action
    switch (action.type) {
      case "augmenter":
        console.log(action);
        return state + action.payload
      case "diminuer":
        console.log(action);
        return state - action.payload
      default:
        break;
    }
  }

  return (
    <div className="App">
      <h1>Mon compteur{count}</h1>
      <h1>Mon compteur{count}</h1>
      <button onClick={()=>countDispatch({type:'augmenter', payload:5})}>Augmenter</button> {/* payload -> données supplémentaire */}
      <button onClick={()=>countDispatch({type:'diminuer', payload: 100})}>Diminuer</button>
    </div>
  );
}

export default App;
