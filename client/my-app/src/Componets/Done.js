import React, {Component} from "react";

export default class Done extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }      
    DoneData = async(serial) => {
        await fetch(`http://localhost:3000/done/${serial}`)
        
    }

    componentDidMount() {
      if (this.props.serial !== null) {
          this.DoneData(this.props.serial)
      }
      this.props.trigerGetData('true');
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