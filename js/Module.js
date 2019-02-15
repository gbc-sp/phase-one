'use strict';

class Module extends React.Component {

    // constructor gets called when the component is created
    constructor(props) {

        // "Props" are properties that were passed into the component
        super(props);

        // "State" are properties that need to be stored within the component
        this.state = {
            name: props.name,
            progress: props.progress
        };

        // referenced functions need to be bound to "this" locally
        this.handleClick = this.handleClick.bind(this); 
    }

    // When the component is loaded
    componentDidMount() {
        
    }

    // Before the component is removed
    componentWillUnmount() {
        
    }

    // When someone clicks on this component
    handleClick() {

        // When state changes, render gets called to refresh the element!
        this.setState(state => ({
            progress: (this.state.progress <= 90) ? this.state.progress+10 : 100 // Update the progress of the element by 10%
        })); 
    }

    render() {
        // If an element is in progress (greater than 0%), show it with an extra class to make it green (in-progress)
        return (<li className={(this.state.progress > 0) ? 'module in-progress' : 'module'} onClick={this.handleClick}>
                    <div><a href="#">{this.state.name}</a></div>
                    <div>Progress: {(this.state.progress < 100) ? this.state.progress + `%` : "Complete"}</div>
                </li>);
    }
}

/* // Uncomment when we run this project from NodeJS:
export default Module; */