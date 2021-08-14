import React, { Component } from 'react'

export default class Cities extends Component {
    state={
    cities:['Chandigarh','Delhi','Jalandhar']
     };
     UpdateCities=(e)=>{
         if(e.code==="Enter"){
             this.setState({cities:[...this.state.cities,e.target.value]});
             e.target.value="";
         }
     }
     deleteCity=(c) =>{
         let newCities=[...this.state.cities];
         newCities=newCities.filter((city)=>city!==c);
         this.setState({cities:newCities});
     }
    render() {
        return (
            <div>
                    {this.state.cities.map((city)=>(
                        <h2 key={city}>
                            {city} <button onClick={() => this.deleteCity(city)}>Delete</button>
                        </h2>
                    ))}
                    <input onKeyUp={this.UpdateCities} type="text"/>
                
            </div>
        )
    }
}

//cities ended

