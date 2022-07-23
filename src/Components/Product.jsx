import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import guitarImg from './../Static/assets/guitar.jpg'
import { Link } from 'react-router-dom';

export function Product(props){
    const {data} = props;
    const styles = {
        card: {
            width: '18rem',
            minWidth: '300px'
        },
        img: {
            objectFit: 'cover'
        }
    }
    return(
        <Card className={data.type} style={styles.card}>
        <Card.Img variant="top" src={guitarImg} style={styles.img}/>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Subtitle>{data.value}</Card.Subtitle>
            <Card.Text>
            {data.description}
            </Card.Text>
            <Button as={Link} to={'/products/'+data.id} variant="primary">Buy now!</Button>
        </Card.Body>
        </Card>
    )
}