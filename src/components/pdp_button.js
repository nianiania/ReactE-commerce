import React, { Component } from 'react';
import { buttonsInstance, Button, ButtonToolbar } from 'react-bootstrap';



class PdpButton extends Component {
    render() {
        return (
            <div className="buttonsInstance col-xs-12 col-md-4">
                            <ButtonToolbar>
                                <Button bsStyle="primary" bsSize="large" active> BUY </Button>
                            </ButtonToolbar>
        
            </div>

        );
    }
}


export default PdpButton;