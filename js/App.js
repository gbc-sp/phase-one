'use strict';
/* // Uncomment when we run this project from NodeJS:
import Module from './ModuleList';
import ModuleList from './Module'; */


class App extends React.Component {

    // Storing modules in the App (base component) state
    state = {
        modules: [
            {name:`Module A`, progress:40},
            {name:`Module B`, progress:20},
            {name:`Module C`, progress:0},
            {name:`Module D`, progress:100}
        ]
    };

    render() {
        // The state.modules array is passed to the ModuleList as a prop called modules
        return <ModuleList modules={this.state.modules}/>;
    }
}

// Create an "App" Component and put in the HTML div with `id="app"`.
ReactDOM.render( <App />, document.getElementById('app') );
