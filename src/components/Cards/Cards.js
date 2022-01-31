import { Card, CardBody, CardTitle, CardText, CardImg, CardColumns, Button, CardSubtitle, Col, Row } from 'reactstrap'
import pokeBackground from "../../Assets/pokemonBackground.png"
import smarterBarter1 from "../../Assets/smarterbarter1.PNG"
import lofiGirl from "../../Assets/lofigirl.gif"
import "./Cards.css"

const Cards = () => {
  return (
    <>


      <CardColumns>
        <Row>
          <Col sm="6">
            <Card>
              <CardImg
                alt="Card image cap"
                src={pokeBackground}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Welcome to the Safari
                </CardTitle>
                <CardText>
                  A pokemon safari inspired game where a player can catch pokemon and store them in a pokedex. APIs were used to generate random pokemon and interact with them and in doing so you receive a joke.
                </CardText>
                <Button
                  className='btn-secondary'
                  href="https://nathanmontelli.github.io/catchAllTheDadJokes/">
                  Travel to the Safari
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6"></Col>
        </Row>

        <Row>
          <Col sm="6"></Col>
          <Col sm="6">
            <Card>
              <CardImg
                alt="Card image cap"
                src={smarterBarter1}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  SmarterBarter
                </CardTitle>
                <CardText>
                  A online marketplace where you can connect with other who are looking to barter goods.
                </CardText>
                <Button
                  className='linkBtn'
                  href="https://smartbarter.herokuapp.com/login.html">
                  Enter SmarterBarter
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="6">
            <Card>
              <CardImg
                alt="Card image cap"
                src={lofiGirl}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  LoFi Study Room - In Progress
                </CardTitle>

                <CardText>
                  A study room where you and your classmates or friends can study together and share notes while listening to a mix of lofi music genres.
                </CardText>
                <Button
                  className='linkBtn'
                  href="">
                  Join a LoFi Study Room
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardColumns>
      <Col sm="6"></Col>
    </>
  )
}

export default Cards