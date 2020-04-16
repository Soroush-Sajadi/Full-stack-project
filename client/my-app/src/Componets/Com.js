import React, {Component} from "react";

export default class Com extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }      

    async componentDidMount() {
      await fetch(`http://localhost:3000/`) 
          .then(response => response.json())
          .then(data => { this.setState( { data } )
            });
        }
      
      render() {
          {console.log(this.state.data)}
        return (  
            <div>
               <h1>{this.state.data.map(item => item.data)}</h1>
            </div>
        )
    }
}