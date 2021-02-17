import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import 'components/bootstrap.min.css'
import '../utils/carousel.css';
import '../utils/css/style.css';



const Home = (props) => {
    return(
        <>
            
            <main>
                <Content></Content>
                <Footer></Footer>
            </main>
        </>
    )
}

export default Home;