//import {x} from 'react-bootstrap'
import SimpleCard from './SimpleCard'
const SingleBook = (props) => {
    return <SimpleCard
        w={"100%"} src={props.book.img} title={props.book.title} >
    </SimpleCard>
}

export default SingleBook;