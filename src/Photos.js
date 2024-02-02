import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { BrowserRouter } from "react-router-dom";

function Photos() {

    let [photo, setphoto] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setphoto(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }, [])
    return (
        <>
            <Container>
                <Row>
                    {
                        photo.map((ele, ind) => {
                            return (
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={ele.url} />
                                        <Card.Body>
                                            <Card.Title>{ele.title}</Card.Title>
                                            <Card.Text>
                                                <span>albumId:</span>{ele.albumId}<br></br>
                                                <span>Id:</span>{ele.id}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
export default Photos; 