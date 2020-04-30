import React, {Component} from "react";

export default class RenderComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }      
    DoneData = async(serial) => {
        await fetch(`http://localhost:3000/done/${serial}`) 
    }
    async componentDidMount() {
        if (this.props.serial !== null) {
           this.DoneData(this.props.serial)
        }
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.serial !== this.props.serial) {
            this.DoneData(this.props.serial)
        }
        };

    render() {
      return (
        <>
        </>
      )
  }
}