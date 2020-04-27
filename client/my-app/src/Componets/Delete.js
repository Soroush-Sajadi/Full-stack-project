import React, {Component} from "react";

export default class RenderComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        };
    }      
    deleteData = async(serial) => {
        await fetch(`http://localhost:3000/delete/${serial}`) 
    }
    async componentDidMount() {
        if (this.props.serial !== null) {
           this.deleteData(this.props.serial)
        }
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.serial !== this.props.serial) {
            this.deleteData(this.props.serial)
        }
        };
      
      render() {
        return (  
            <div className="wraper" >
            </div>
        )
    }
}