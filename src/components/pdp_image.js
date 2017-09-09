import React, { Component } from 'react';
import {  thumbnailInstance, Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';



class PdpImage extends Component {
    render() {
        return (
            <div className="thumbnailInstance">
              <Grid>
                <Row>
                  <Col xs={12} md={8}>
                    <Thumbnail src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" alt="">
                      <h3>Macbook pro retina</h3>
                      <h4> Price : Rp 12.000.000 </h4>
                      <br/>
                      <label>Description</label>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                       It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                       essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                       Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum.
                      </p>

                    </Thumbnail>
                  </Col>
                </Row>
              </Grid>

            
            </div>
            
        );
    }
}


export default PdpImage;