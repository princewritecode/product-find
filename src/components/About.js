import React from "react";

class About extends React.Component
{
    constructor(props)
    {
        super(props); // Call super first
        console.log(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount()
    {
        console.log('will run after the instance is created or component is rendered...');
    }

    incrementCount = () =>
    {
        this.setState({ count: this.state.count + 1 });
    };

    decrementCount = () =>
    {
        this.setState({ count: this.state.count - 1 });
    };
    componentDidUpdate()
    {
        console.log('component updated...');
    }
    render()
    {
        return (
            <>
                <h1>Welcome to the About Section {this.state.count} ...</h1>
                <button onClick={this.incrementCount}>Increment</button>
                <button></button>
            </>
        );
    }
}

export default About;
