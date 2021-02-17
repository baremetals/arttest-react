import React from 'react';


import CardComponent from '../components/CardComponent';
import SearchComponent from '../components/SearchComponent';
import { box } from 'data/data'
import '../utils/css/style.css';
import '../utils/carousel.css';

const AllLiveContests = (props) => {
    const arr = [1, 2, 3];
    return(
        <>
            
            <main>
                <SearchComponent></SearchComponent>
                {
                    arr.map((item, index) => 
                        <div className="album padding-b-40" key={index}>
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {
                                    box.map((b, id) =>
                                    (
                                        <div className="col" key={b.id}>
                                            <CardComponent
                                            hostName={b.hostName}
                                            title={b.title}
                                            content={b.content}
                                            likes={b.likes}
                                            date={b.date}
                                            contestImg={b.contestImg}
                                            ></CardComponent>
                                        </div>
                                    )
                                    )
                                }
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="bg-dark">
                    <div className="container">
                        <div className="row">
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </main>
        </>
    )
}

export default AllLiveContests;
