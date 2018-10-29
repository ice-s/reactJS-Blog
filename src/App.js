import React, {Component} from 'react';

import Navbar from "./components/Navbar";
import Container from "./components/Container";

class App extends Component {


	constructor(props) {
		console.log("constructor App")
         super(props);
         this.state = { color: 'green' };
    }

    render() {
    	console.log("render App");
        return (
        	<div>
            	<Navbar/>
            	<Container/>
        	</div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount App")
    }


    /*__________________*/
    componentWillReceiveProps(){
    	console.log("componentWillReceiveProps App")
    }

    shouldComponentUpdate(){
    	console.log("shouldComponentUpdate App")
    }
    
    componentDidUpdate(){
		console.log("componentDidUpdate App")
    }
    /*__________________*/

}

export default App;
