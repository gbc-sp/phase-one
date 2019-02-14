class ModuleList extends React.Component {

    constructor(props) {

        // "Props" are properties that were passed into the component
        super(props);

        // "State" are properties that need to be stored within the component
        this.state = {
            modules: props.modules
        };
    }

    render() {
        const moduleList = this.state.modules.map((mod, k) =>
            <Module key={k} name={mod.name} progress={mod.progress} />
        );

        // Notice we wrap the two elements into a <div> because a component can only return one HTML element        
        return (<div>
                    <h1 className="title">Available Modules</h1>
                    <ul className="modules">
                        {moduleList}
                    </ul>
                </div>);
    }
}