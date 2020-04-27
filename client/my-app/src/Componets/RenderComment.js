import React, {Component} from "react";
import Delete from './Delete'
import "./CSS/RenderComment.css"

export default class RenderComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            serial : null

        };
    }      
    getData = async () => {
        await fetch(`http://localhost:3000/`) 
          .then(response => response.json())
          .then(data => { this.setState( { data } )
            });
    }
    async componentDidMount() {
            this.getData()
        }
        click = (e) => {
            this.setState({serial: e.target.getAttribute('attr')})
        }
      
      render() {
        return (  
            <div className="wraper" >
               {this.state.data.map(item => {
                   return <div attr ={item.serial} onClick={this.click} className="card">
                       <p className="task">{item.comment}</p>
                       <p className="date">{item.date}</p></div>})}
            {this.state.serial !== null ? (<Delete serial={this.state.serial} />) :null }       
            </div>
        )
    }
}