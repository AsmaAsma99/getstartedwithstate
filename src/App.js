import React from "react";
import Sara from "./sara.jpg";
import Harold from "./harold.jpg";
import Daniel from "./daniel.jpg";

class App extends React.Component {
  state = {
    titre: "Sarra",
    image: Sara,
    description: "I love big butts and I cannot lie"
  };
  render() {
    return (
      <div className="App">

        <button onClick={()=>{this.setState(
        {
          titre: "Sara",
          image: Sara,
          description:  "I love big butts and I cannot lie"
        } 
       )}}>Sara</button>
        <button onClick={()=>{this.setState(
        {
          titre: "Harold",
          image: Harold,
          description: "oh lala"
        } 
       )}}>Harold</button>
        <button onClick={()=>{this.setState(
        {
          titre: "Daniel",
          image: Daniel,
          description: "oh lele"
        } 
       )}}>Daniel</button>


        <h1>{this.state.titre}</h1>
        <img alt='' src={this.state.image}/>
        <h2>{this.state.description}</h2>

       
      </div>
    );
  }
}
export default App