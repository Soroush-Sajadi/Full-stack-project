import React, { Component }  from 'react';
import RenderComment from './RenderComment';
import PostComment from './PostComment'


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

    handleClick = (e) => {
        this.setState({
            newTodo: this.state.input });
            e.preventDefault();
    }

    render() {
      console.log(this.state)
        return ( 
          <div>
            <input className="input" type="text" placeholder="What do you want to do" onChange={ this.handleChange } />
            <input className="button" type="button" value="Add" onClick={this.handleClick} />
              {this.state.newTodo !== null ?(<PostComment newTodoComment={this.state.newTodo} trigerFetch={this.handleClick} />) : null}
              <RenderComment trigerFetch={this.handleClick} />
          </div>
        )
    }
}