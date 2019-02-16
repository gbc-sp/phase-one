'use strict';

// The ModuleList Component can be created two different ways: a class, or a function()
//    The "ModuleList" Component is just a "dumb" object that doesn't do anything more than just create (return) other Components.
//    So it can technically just be a regular function(), rather than a React Component that will require additional resources.

// class ModuleList extends React.Component {

// This `function ModuleList(props)` replaces the Component `class ModuleList` because it simply returns some JSX and doesn't have any complex functionality of its own
function ModuleList(props) {

    // No need to call a constructor and call super() for the props
    // All this Component is doing is just passing down props direct to its children

    // NOTE: a Component defined as a function doesn't have to call "render()", it just creates the Modules and returns some JSX
    //render() {
        
        // A loop that runs once for every element in the "modules" Array
        // Note we're usin the props directly, rather than storing state
        const moduleList = props.modules.map((mod, k) =>
            <Module key={k} name={mod.name} progress={mod.progress} />
        );

        // Notice we wrap the two elements into a <div> because a component can only return one HTML element        
        return (<div>
                    <h1 className="title">Available Modules</h1>
                    <ul className="modules">
                        {moduleList}
                    </ul>
                </div>);
    //}
}

/* // Uncomment when we run this project from NodeJS:
export default ModuleList; */