import React from 'react'
import { blogbox } from 'data/data'
import { Link } from 'react-router-dom'

function BlogComponent(props) {
    const { category, title, content, image, mapInfo} = props
    
    return (
        <div>
            <div className="bg-black">
                    <div className="container marketing">
                        <div className="padding-b-20 padding-t-100">
                            <h2>Latest News &amp; Events</h2>
                        </div>
                        {/* Three columns of text below the carousel */}
                        <div className="row">
                            {blogbox.map((bb, id) => (
                                <div className="col-lg-4" key={bb.id}>
                                <img alt='image' src={bb.img} width="100%"></img>
                                <h6 className="margin-t-20 color-turquoise">{bb.category}</h6>
                                <h2 className="margin-t-20">{bb.title}</h2>
                                <p>{bb.content}</p>
                                <p><button className="btn btn-border-white margin-t-20">FIND OUT MORE</button></p>
                            </div>
                            ))}
                        </div>
                    </div>
                    {/* /.row */}
                </div>
        </div>
    )
}

export default BlogComponent
