import { Form, FormGroup, Label, Input, Button, Row, Col, Container } from 'reactstrap'
import "./Contact.css"

const Contact = () => {
  return (
    <Container>
      <h1 className='contactMe'>Contact Me</h1>
    <Form
    className='formEdit'>
      <Row>
        <Col>
          <FormGroup>
            <Label for="exampleName">
              Name
            </Label>
            <Input
              id="exampleName"
              name="name"
              type="name"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              type="email"
            />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label for="exampleSubject">
          Subject
        </Label>
        <Input
          id="exampleName"
          name="name"
          type="name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">
          Your Message
        </Label>
        <Input
        className='textarea'
          id="exampleText"
          name="text"
          type="textarea"
        />
      </FormGroup>
      <Button>
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Contact