import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

export function Product(props){
    const {data} = props;
    const styles = {
        card: {
            width: '18rem',
            minWidth: '300px',
            height: "500px"
        }
    }
    return(
        <Card className={data.type} style={styles.card}>
            <Card.Img className="product-img" variant="top" src={data.img.url}/>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle>${data.value}</Card.Subtitle>
                <Card.Text>
                    {
                    (data.description.length > 95 && data.description.substring(0, 95)+"...")||
                    data.description   
                    }
                </Card.Text>
                <Button as={Link} to={'/products/'+data.id} variant="primary">Buy now!</Button>
            </Card.Body>
        </Card>
    )
}