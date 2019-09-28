import React, { Component } from 'react';
import {
  
  Button,
  Card,
  CardBody,
  
  CardHeader,
  Col,
  
  
  Form,
  FormGroup,
  FormText,
  
  Input,
  
  Label,
  Row,
} from 'reactstrap';

class AddJenisRekening extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        
        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader>
                <strong>Tambah Jenis Rekening</strong>
              </CardHeader>
              <CardBody>
                <Form  method="post" encType="multipart/form-data" className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Kode Jenis Rekening</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="kd_jenisakun" placeholder="Text" name="kd_jenisakun"/>
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Desc Jenis Rekening</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="desc_jenisakun" placeholder="Text" name="desc_jenisakun"/>
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                  <Col md="3">
                      &nbsp;
                    </Col>
                  <Button type="submit" className="mr-1" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                  <Button type="reset" className="mr-1" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                  </FormGroup>
                </Form>
              </CardBody>
             
            </Card>
            
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default AddJenisRekening;
