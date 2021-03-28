
import './_app.scss';
import React from 'react';
import Cards from './components/cards/Cards';
import axios from 'axios';

function App() {

const [highMargin,setHighMargin]=React.useState([]);

axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top')
.then(res=>setHighMargin(res.data.results))


  return (
    <div id="screen">
   <div id='card-container'>
     
{highMargin.map((el)=> <Cards title={el.name}/> )}
   
   </div>
   <div id='table-container'></div>
    </div>
  );
}

export default App;
