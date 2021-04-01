import logo from './logo.svg';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Statistics from "./componentes/statistics.js";

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
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
  /* //Funciones  Statistics
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
}*/
var average = ((good*1)+(neutral*0)+(bad*-1))/(good+neutral+bad)

  return (
    <div>
<<<<<<< HEAD
      <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
        <span class="block">
                Give Feedback
        </span>
        <button class="py-4 px-6 mt-5  bg-green-600 hover:bg-green-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
          onClick={handlerClickGood}>Good</button>
        <button class="py-4 px-6 mt-5 bg-blue-600 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
           onClick={handlerClickNeutral}>Neutral</button>
        <button class="py-4 px-6 mt-5 bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
           onClick={handlerClickBad}>Bad</button>

        <span class="block mt-4">
                Statistics
        </span>
        <span class="block text-indigo-500  text-base">
        <Statistics 
          good={good} 
          neutral= {neutral} 
          bad= {bad} 
          all= {good+neutral+bad}
          average= {((good*1)+(neutral*0)+(bad*-1))/(good+neutral+bad)}
          positive=  {(100*good)/(good+neutral+bad)} 
        />
        </span>
      </h2>
    </div>
  );
};
=======
      <h2>Give Feedback</h2>
      <button onClick={handlerClickGood}>Good</button>
      <button onClick={handlerClickNeutral}>Neutral</button>
      <button onClick={handlerClickBad}>Bad</button>
      <Statistics 
				good={good} 
				neutral= {neutral} 
				bad= {bad} 
				all= {good+neutral+bad}
				average= {((good*1)+(neutral*0)+(bad*-1))/(good+neutral+bad)}
				positive=  {(100*good)/(good+neutral+bad)} 
			/>
    </div>
  );
};

>>>>>>> 78e781b65444b9210375fa6fdb4fa23b330883fb
export default App;
