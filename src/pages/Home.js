import React from 'react';
import {Col, Row, Card} from 'antd';
import SongsList from '../components/SongsList';
import Video from '../components/Video';
import calaca from '../assets/img/eloOe3.gif';

const Home = () => {
   
    
    return (  
            <>
            <Video/>
                <Row>
                <Col md={2}/>
                    <Col md={20}>
                        <h1 className="title" >tomamos el control de la UPSLP 🔥🔥🔥</h1>
                        <h3 className="subtitle">Mientras encuntras alguna <a href="/">pista</a>, te dejo algunas canciones de atraco🎵 </h3>
                        <br/>
                    </Col>
                <Col md={2}/>
                </Row>
                <Row>
                    <Col md={2}/>
                    <Col md={20}>
                        <Card>
                            <Card.Grid className="cards-home" >
                                <img src={calaca} alt="calaca chida" style={{width:"90%"}}/>
                            </Card.Grid>
                            <Card.Grid className="cards-home">
                               <SongsList/>
                            </Card.Grid>
                        </Card>
                    </Col>
                    <Col md={2}/>
                </Row>
            </>
    );
}
 
export default Home;

