import React, { Component }  from 'react';


export default class PostComment extends Component {
    constructor() {
        super();
        this.state = {
            data : [],
            input: null
        }
    }
    handleChange = (e) => {
        this.setState({ input: e.target.value });
        console.log(this.state.input);
    }

    handleClick = async () => {
        await fetch(`http://localhost:3000/`,option)
    }

    render() {
        return(
          <div>
            <input className="input" type="text" placeholder="What do you want to do" onChange={ this.handleChange } />
            <input className="button" type="button" value="Search" onClick={this.handleClick} />
          </div>
        )
    }
}