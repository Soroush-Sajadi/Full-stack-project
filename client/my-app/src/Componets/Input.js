import React, { Component }  from 'react';
import RenderComment from './RenderComment';
import PostComment from './PostComment'
import './CSS/Input.css'


export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: null,
            newTodo: null,
        }
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value});
    }

    handleKeyDown = (e) => {
     
      if(e.keyCode == 13){
        console.log('value', e.target.value);
        this.setState({newTodo: e.target.value})
        
     }
    }

    render() {
        return ( 
          <div>
            <div className="input-wraper">
              <input className="input" type="text" placeholder="What do you want to do"  onKeyDown={ this.handleKeyDown } onChange={this.handleChange}/>
            </div>
            {this.state.newTodo !== null ?(<PostComment newTodoComment={this.state.newTodo} trigerFetch={this.handleKeyDown} />) : null}
            <RenderComment trigerFetch={this.handleKeyDown} />
          </div>
        )
    }
}