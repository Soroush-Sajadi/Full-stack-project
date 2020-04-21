import React, {Component} from "react";
import "./CSS/RenderComment.css"

export default class RenderComment extends Component {
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
        return (  
            <div className="wraper" >
               {this.state.data.map(item => {
                   return <div className="card">
                       <p className="task">{item.comment}</p>
                       <p className="date">{item.date}</p></div>})}
            </div>
        )
    }
}