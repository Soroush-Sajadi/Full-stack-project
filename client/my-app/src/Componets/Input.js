import React, { Component }  from 'react';
import RenderComment from './RenderComment';
import PostComment from './PostComment'


export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            input: null,
            date: null,
            newTodo: null
        }
    }
    handleChange = (e) => {
        this.setState({ input: e.target.value});
    }
    
    handleClick = async (e) => {
        e.preventDefault();
        this.setState({
            newTodo: this.state.input});
    }

    render() {
        return ( 
          <div>
            <input className="input" type="text" placeholder="What do you want to do" onChange={ this.handleChange } />
            <input className="button" type="button" value="Search" onClick={this.handleClick} />
              <PostComment newTodoComment={this.state.newTodo} />
              <RenderComment newTodoComment={this.state.newTodo} />
          </div>
        )
    }
    
}