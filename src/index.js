import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PdpImage from './components/pdp_image';
import PdpButton from './components/pdp_button';

// const API_KEY = 'AIzaSyA8bwiaMmGlvaBxeUzVobbi-cSU20E3yTg';



// Create a new component . this component should produce 
// some html
class App extends Component {

	render(){
		return (
			<div>
				<PdpImage  />
				<PdpButton />
			</div>
		);
	}
}



ReactDOM.render(<App/>, document.querySelector('.container'));

// ReactDOM.render(
//   <PdpImage />,
//   document.getElementById('app')
// );

























