'use strict';
/* // Uncomment when we run this project from NodeJS:
import Module from './Module';
// all other components here too
*/


// This is a "dumb" object, so it can technically just be a function()
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // For now, use the global MODULES, but in future the ModuleList would fetch a list of modules from our DB
            <ModuleList modules={MODULES}/>
        );
    }
}

// A global (for now) array of available modules
const MODULES = [
    {name:`Module A`, progress:40},
    {name:`Module B`, progress:20},
    {name:`Module C`, progress:0},
    {name:`Module D`, progress:100}
];

ReactDOM.render( <App />, document.getElementById('app') );
