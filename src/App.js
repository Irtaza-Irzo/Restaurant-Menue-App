import React, {useState}  from "react";
import Restaurant from "./Restaurant";
import './style.css'
import menue from './Menue'

function App() {
  const [dataMenue, setDataMenue] = useState(menue);
    
  const filterItems = (element) => {
    const filterCategory = menue.filter((currElm) => {
      // console.log(currElm.category===element)
      return  currElm.category===element
    });
   setDataMenue(filterCategory);
   

  }

  return (
   
    <>
    
    <nav>
     <button onClick = {() => filterItems('BreakFast')}>BreakFast</button>
     <button onClick = {() => filterItems('Lunch')}>Lunch</button>
     <button onClick = {() => filterItems('Dinner')}>Dinner</button>
     <button onClick = {() => setDataMenue(menue)}>All </button>
    </nav>
      
      {/* <Restaurant id = '1'  Category = 'Breakfast' Name = 'Burger' Image ='./images/1.jpg'/>
      <Restaurant id = '2'  Category = 'Breakfast' Name = 'Pizza'Image ='./images/2.jpg'/>
      <Restaurant id = '3'  Category = 'Breakfast' Name = 'Shawarma' Image ='./images/3.jpg'/>
      <Restaurant id = '4'  Category = 'Lunch' Name = 'Sabzi'/>
      <Restaurant id = '5'  Category = 'Dinner' Name = 'Daal'/>
      <Restaurant id = '6'  Category = 'Dinner' Name = 'Sweat'/>
      <Restaurant id = '7'  Category = 'Lunch' Name = 'Pizza'/>
      <Restaurant id = '8'  Category = 'Breakfast' Name = 'Pizza'/>
      <Restaurant id = '9'  Category = 'Dinner' Name = 'Pizza'/> */}

      <Restaurant a =  {dataMenue}/>
    </>
  );

}

export default App;
