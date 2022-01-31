import { Card, CardBody, CardTitle, CardText, CardImg, CardColumns, Button, CardSubtitle, Col} from 'reactstrap'

const Cards = () => {
  return (
    <>
    {/* <div>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Card Title
          </CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
    </div>
     <div>
      <Card>
        <CardImg
          className='card2'
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Card Title
          </CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
    </div>
     <div>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Card Title
          </CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
    </div> */}
    
      <CardColumns>
        <Col sm="6">
        <Card>
          <CardImg
          className='card2'
            alt="Card image cap"
            src="https://picsum.photos/256/186"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>


        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/256/186"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>


        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/256/186"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
        </Col>
        
      </CardColumns>
    </>
  )
}

export default Cards