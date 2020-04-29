import React, { Component }  from 'react';
import RenderComment from './RenderComment';


export default class PostComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
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

    async componentDidUpdate() {
        if (this.props.trigerFetch) {
          this.componentDidMount(this.props.newTodoComment)
        }
      };

    render() {
        return ( 
          <div>
          </div>
        )
    }
    
}