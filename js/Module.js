'use strict';

class Module extends React.Component {

    // constructor gets called when the component is created
    constructor(props) {

        // "Props" stands for properties, which are immutable variables passed into a component
        // https://reactjs.org/docs/components-and-props.html
        super(props);

        // "State" are (mutable) properties that are stored within the component to maintain state
        // https://reactjs.org/docs/state-and-lifecycle.html#what-should-go-in-state
        this.state = {
            name: props.name,
            progress: props.progress
        };

        // referenced functions need to be bound to "this" locally
        // No need to bind "this" if we use "=>" (fat arrow) rather than "function handleClick"
        // this.handleClick = this.handleClick.bind(this); 
    }

    // When the component is loaded
    componentDidMount() {
        
    }

    // Before the component is removed
    componentWillUnmount() {
        
    }

    // When someone clicks on this component
    handleClick = (event) => {

        // When state changes, render gets called to refresh the element!
        this.setState({progress: (this.state.progress <= 90) ? this.state.progress+10 : 100});
        
        // Or this, called the "updater function form":
        // this.setState(state => ({
        //     progress: (this.state.progress <= 90) ? this.state.progress+10 : 100 // Update the progress of the element by 10%
        // })); 
        

        // THE BIGGEST PROBLEM HERE is that we update application data, but it doesn't actually get updated at the App state level
        // We can either use a callback method, a framework like Redux (or Flux), or the Context API
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