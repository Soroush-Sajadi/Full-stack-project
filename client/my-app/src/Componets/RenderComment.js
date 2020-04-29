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
    componentDidMount() {
            this.getData()
        }
    componentDidUpdate() {
        if (this.props.trigerFetch) {
            this.componentDidMount(this.props.newTodoComment)
        }
    };
        handleClick = (e) => {
            this.setState({serial: e.target.getAttribute('attr')})
        }
      
      render() {
        return (  
            <div className="wraper" >
               {this.state.data.map(item => <div attr ={item.serial} className="card">
                       <p className="task">{item.comment}</p>
                       <p className="date">{item.date}</p>
                       <input attr ={item.serial} className="button" type="button" value="Delete" onClick={this.handleClick} />
                       </div>
                    )}
            {this.state.serial !== null ? (<Delete serial={this.state.serial} />) :null }
            </div>
        )
    }
}