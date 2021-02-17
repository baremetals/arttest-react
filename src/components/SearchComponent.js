import React from 'react';

const SearchComponent = (props) => {
    return(
        <>
            <div className="main-top">
                <div className="container padding-b-40">
                    <div className="padding-b-20">
                        <h2><b>All Live Contests</b></h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-12 padding-b-20">
                            <div className="d-relative">
                            <input type="text" id className="search-box" placeholder="Search Contest" />
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search search-placholder-icon" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 		1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            </div>
                        </div>
                        <div className="col-sm-3 col-12 padding-b-20">
                            <div className="dropdown">
                            <button className="btn dropdown-box text-uppercase" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            United Kingdom
                            </button>
                            <ul className="dropdown-menu dr-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 padding-b-20">
                            <div className="dropdown">
                            <button className="btn dropdown-box text-uppercase" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Country Region
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-3 padding-b-20">
                            <div className="dropdown">
                            <button className="btn dropdown-box text-uppercase" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Category Type
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 padding-b-20">
                            <div className="dropdown">
                            <button className="btn dropdown-box text-uppercase" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Sector
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 padding-b-20">
                            <div className="dropdown">
                            <button className="btn dropdown-box text-uppercase" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Tags
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 padding-b-20">
                            <div className="dropdown">
                            <button className="btn dropdown-box text-uppercase" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Most Recent
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchComponent;
