import React, {Component} from "react";
import Delete from './Delete'
import Done from './Done'
import "./CSS/RenderComment.css"

export default class RenderComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            serialDelete: null,
            serialDone: null
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
            this.getData()
        }
    };
    handleClickDelete = (e) => {
        this.setState({serialDelete: e.target.getAttribute('attr')})
        }
    handleClickDone = (e) => {
      this.setState({serialDone: e.target.getAttribute('attr')})
      }
      
      render() {
        return (  
            <div className="wraper" >
               {this.state.data.map(item => <div attr ={item.serial} className="card">
                       <h4 className="task">{item.comment}</h4>
                       <div className="card-right">
                          <p className="date">{item.date}</p>
                          <input attr ={item.serial} className="delete-button" type="button" value="Delete" onClick={this.handleClickDelete} />
                          <input attr ={item.serial} className="done-button" type="button" value="Done" onClick={this.handleClickDone} />
                       </div>
                       </div>
                    )}
            {this.state.serialDelete !== null ? (<Delete serial={this.state.serialDelete} />) :null }
            {this.state.serialDone !== null ? (<Done serial={this.state.serialDone} />) :null }
            </div>
        )
    }
}