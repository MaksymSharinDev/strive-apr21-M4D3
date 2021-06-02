import {Card} from 'react-bootstrap'

const SimpleCard = (props) => {

    return (
        <Card style={{width: props.w}}>
            <Card.Img variant="top" src={props.src}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )

}

export default SimpleCard;