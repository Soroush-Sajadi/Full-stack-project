import React, { Component }  from 'react';


export default class PostComment extends Component {
    constructor() {
        super();
        this.state = {
            data : [],
            input: null,
            date: null,
        }
    }
    handleChange = (e) => {
        this.setState({ input: e.target.value,date: new Date().toLocaleDateString() });
    }
    
    handleClick = async (e) => {
        e.preventDefault();
        console.log(this.state.date);
        await fetch (`http://localhost:3000/comment`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "comment": this.state.input,
             "date": this.state.date
            })
        })
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