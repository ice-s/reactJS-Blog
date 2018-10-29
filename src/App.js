import React, {Component} from 'react';

import Navbar from "./components/Navbar";
import Container from "./components/Container";

class App extends Component {
    render() {
        return (
        	<div>
            	<Navbar/>
            	<Container/>
        	</div>
        );
    }
}

export default App;
