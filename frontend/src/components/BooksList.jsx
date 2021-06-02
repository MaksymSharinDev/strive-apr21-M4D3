import React from "react";
import SingleBook from "./SingleBook";
import {Col, Container, Form, Row} from "react-bootstrap";

class BookList extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    state = {
        q: '', qResult: []
    }

    filterBookList = (e) => {
        this.setState({...this.state, q: e.target.value})

    }

    render = () => {
        return (
            <Container>
                <Row>
                    <Input type={"text"} placeholder={"search"} onchange={this.filterBookList}/>
                </Row>

                <Row>
                    {this.props.books.map(x => (
                        {
                        if ( this.state.qResult.length !== 0 ? qResult.contains(x.id) : true  ){
                        return ( < Col xs = {3} >
                        < SingleBook id = {x.id} book = {x}/>
                        </Col>)
                    }

                        })
                    }
                </Row>

            </Container>
        );
    }
}

export default BookList;
