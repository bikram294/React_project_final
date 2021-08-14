import React,{useState} from "react";
import Cities from "./Cities";

function FunCities() {
    const [cities, setCities] = useState(["Ropar","Chandigarh","Newyork"]);
   const updateCities = (e) => {
      
       if(e.code === "Enter" && e.target.value !== ""){
           setCities([...cities , e.target.value]);
       e.target.value = "";
        }

       
   };
   
    return (
        <div>
            
            {
                cities.map((city) => (
                    <h2 key ={city}>{city}</h2>
                  ))  }
                  <input onKeyUp={updateCities} type ="text" />
        </div>
    );
}

export default FunCities;
