import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PdpImage from './components/pdp_image';

const API_KEY = 'AIzaSyA8bwiaMmGlvaBxeUzVobbi-cSU20E3yTg';



// Create a new component . this component should produce 
// some html
class App extends Component {
	 
	render(){
		return (
			<div>
				<PdpImage />
			</div>
		);
	}
}



ReactDOM.render(<App/>, document.querySelector('.container'));

























