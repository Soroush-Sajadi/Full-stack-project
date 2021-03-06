import React, { Component }  from 'react';
import RenderComment from './RenderComment';


export default class PostComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            errorMessage : null
        }
    }
    
    componentDidMount = async () => {
        if (this.props.newTodoComment !== null) {
        await fetch (`http://localhost:3000/comment`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "comment": this.props.newTodoComment,
             "date": new Date().toLocaleDateString()
            })
        })
    }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.newTodoComment !== this.props.newTodoComment) {
          this.componentDidMount()
        } 
      };

    render() {
        return ( 
          <>
          </>
        )
    }
    
}