import Carousel from 'react-bootstrap/Carousel'
import firebase from '../Config/firebase'

export function Main(){
  console.log(firebase)
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.fineartamerica.com/images-medium-large-5/fender-acoustic-i-bob-orsillo.jpg"
              alt="Acoustic Guitar"
            />
            <Carousel.Caption>
              <h3>Acoustic Guitars</h3>
              <p>The right instrument for the right person. Play False guitars</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.fineartamerica.com/images-medium-large-5/six-string-mark-rogan.jpg"
              alt="Electric Guitar"
            />
    
            <Carousel.Caption>
              <h3>Electric Guitar</h3>
              <p>Have you ever dreamt about being Jimi Hendrix? Take that chance. Be a False Jimi</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vintage-bass-scott-norris.jpg"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Bass Guitar</h3>
              <p>
                Now is your time to be a False Paul McCartney
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}