import {Badge} from 'react-bootstrap'

const MyBadge = (props) => {
    return <Badge style={{backgroundColor: props.color}}  variant > {props.text}   </Badge>
}

export default MyBadge;