import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import './About.css'
import portrait from '../../Assets/portrait.JPG'

const About = () => {
  return (
    <>
  <Container >
      <Row>
        <h6 id="aboutMe" className='header'> </h6>
        <Col
          className=""
          md="6"
        >
          <br />
          <br /><br />
          <p className='intro'>Hi, I'm Nathan</p>
            <p className='info'>I am a currently a website development student undergoing the UCI coding bootcamp. I also attended Cal State Fullerton and graduated with a Bachelor's of Science in Business Administration with a concentration on marketing. My goal as a web devloper is to make sure your website function flawlessly and portrays your brand in the way you want it to be seen.</p>
        </Col>
        <Col
          className=""
          md="6"
        >
        <img className="portrait1" src={portrait} alt="stuff" />
        </Col>
      </Row>
   </Container>
   </>
  )
}

export default About