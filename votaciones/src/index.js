import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //Constantes de Estadísticas
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  
  //Funciones handlerClick Feedback
  const handlerClickGood = () =>{
      setGood(good + 1)
  }
  const handlerClickNeutral = () =>{
      setNeutral(neutral + 1)
  }
  const handlerClickBad = () =>{
      setBad(bad + 1)
  }
  //Funciones  Statistics
  const AllFunction = () =>{
     var total = good+neutral+bad+1
     setAll(total)
  }
  const AverageFunction = () =>{
    var puntGood = good*1
    var puntNeutral = neutral*0
    var puntBad = bad*-1
    //var average = "g:"+(puntGood)+" - n:"+puntNeutral+" -B:"+(puntBad-1)
    var average = ((puntGood)+puntNeutral+(puntBad-1))/(all+1)
    setAverage(average)
 }
 const PositiveFunction = () =>{
    var total = all+1
    var porcentaje = (100*(good+1))/total
    setPositive(porcentaje)
}
  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={handlerClickGood}>Good</button>
      <button onClick={handlerClickNeutral}>Neutral</button>
      <button onClick={handlerClickBad}>Bad</button>
      <h2>Statistics</h2>
      <p>
        <strong>Good: </strong>
        {good}
      </p>
      <p>
        <strong>Neutral: </strong>
        {neutral}
      </p>
      <p>
        <strong>Bad: </strong>
        {bad}
      </p>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
