'use strict';
/* // Uncomment when we run this project from NodeJS:
import Module from './Module'; */


// 3) The App Component (created two different ways):

// 3a) At the moment, this "App" Component is just a "dumb" object that doesn't do anything more than just create (return) another Component, so it can technically just be a regular function(), rather than a React Component that will require additional resources.
/* class App extends React.Component {
    render() {
        return (
            // For now, use the global MODULES, but in future the ModuleList would fetch a list of modules from our DB
            <ModuleList modules={MODULES}/>
        );
    }
} */

// 3b) This `function App(props)` replaces the Component `class App` because it simply returns some JSX and doesn't have any complex functionality of its own
function App(props) {
    return (
        <ModuleList modules={props.modules}/>
    );
}

// Eventually, we'll likely use the class version, but it's important to see there is the possibily of creating a Component-like element that behaves the same, but in a different way.




// 1) A global (for now) array of available modules. This is a test to see whether we can create an application
const MODULES = [
    {name:`Module A`, progress:40},
    {name:`Module B`, progress:20},
    {name:`Module C`, progress:0},
    {name:`Module D`, progress:100}
];

// 2) Create an "App" Component and put in the HTML div with `id="app"`. The MODULES array is passed to the App as a prop called modules
ReactDOM.render( <App modules={MODULES} />, document.getElementById('app') );
