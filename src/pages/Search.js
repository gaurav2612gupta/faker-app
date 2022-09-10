import * as React from 'react';
import { FaSistrix, FaStar, FaHeart } from "react-icons/fa";
import faker from "faker";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { CardMedia } from '@mui/material';

const Search = () => {

    const [isActive, setIsActive] = React.useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.style.color === 'red'){
            // console.log("a");
            e.target.style.color = '';
        }
        else
            e.target.style.color = 'red';
        // setIsActive(true);
    }


    return (
        <div>
            <div className="row searchbar searchBar">
                <form action="/search" className='form searchForm'>
                    <input type="text" className='inputBox searchInp' placeholder="Search" name="search" />
                    <button type="submit" className='submitBtn searchBtn'><FaSistrix size={30} /></button>
                </form>
                <div className='logo' >
                     <Link to = "../fakerApp" > <img src={require('../images/logo.jpg')} alt="" className='logoImg' /> </Link>
                </div>
            </div>  
            <div className="row searchDown">
                <div className="col searchSide">
                    <div className="searchRes">
                        <div className="searchResHeading">
                            <h4> Search Results</h4>
                        </div>
                        <div className="filters">
                            <div className="brandFilter">
                                <h3 className='filterHeading'>BRAND</h3>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <label className="form-check-label">Mango</label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <label className="form-check-label">H&M</label>
                                </div>
                            </div>
                            <div className="priceFilter">
                                <h3 className='filterHeading'>PRICE RANGE</h3>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <label className="form-check-label">Under 500</label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <label className="form-check-label">1000 to 3000</label>
                                </div>
                            </div>
                            <div className="ratingFilter">
                                <h3 className='filterHeading'>RATINGS</h3>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <label className="form-check-label">
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star"><FaStar size={15} /></span>
                                        <span className="star"><FaStar size={15} /></span>
                                        <span className="star "><FaStar size={15} /></span>
                                        <span className="star "><FaStar size={15} /></span>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <label className="form-check-label">
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star"><FaStar size={15} /></span>
                                        <span className="star "><FaStar size={15} /></span>
                                        <span className="star "><FaStar size={15} /></span>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <label className="form-check-label">
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star "><FaStar size={15} /></span>
                                        <span className="star "><FaStar size={15} /></span>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <label className="form-check-label">
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star "><FaStar size={15} /></span>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <label className="form-check-label">
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                        <span className="star checked"><FaStar size={15} /></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col resSide">

                    <div className="row cardDeck searchCardDeck">
                        <div className="card searchCard">
                            <img className='cardImg searchCardImg' src={faker.image.fashion(240, 320, true)} alt="Avatar" />
                            <div className="like" onClick={handleClick} style={{ color: isActive ? 'red' : '' }} > <FaHeart size={25} /> </div>
                            <div className="viewProd"> <h3 className='viewTxt'>View Product</h3> </div>
                            <div className="cardInfo">
                                <p className='prodinfo'>{faker.commerce.productName()}</p>
                                <h4 className='prodPrice'> Rs. {faker.commerce.price(300, 5000)}</h4>
                                <div className="starRating">
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span>(210)</span>
                                </div>

                            </div>
                        </div>
                        <div className="card searchCard">
                            <img className='cardImg searchCardImg' src={faker.image.fashion(240, 320, true)} alt="Avatar" />
                            <div className="like" onClick={handleClick} style={{ color: isActive ? 'red' : '' }} > <FaHeart size={25} /> </div>
                            <div className="viewProd"> <h3 className='viewTxt'>View Product</h3> </div>
                            <div className="cardInfo">
                                <p className='prodinfo'>{faker.commerce.productName()}</p>
                                <h4 className='prodPrice'> Rs. {faker.commerce.price(300, 5000)}</h4>
                                <div className="starRating">
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span>(210)</span>
                                </div>

                            </div>
                        </div>
                        <div className="card searchCard">
                            <img className='cardImg searchCardImg' src={faker.image.fashion(240, 320, true)} alt="Avatar" />
                            <div className="like" onClick={handleClick} style={{ color: isActive ? 'red' : '' }} > <FaHeart size={25} /> </div>
                            <div className="viewProd"> <h3 className='viewTxt'>View Product</h3> </div>
                            <div className="cardInfo">
                                <p className='prodinfo'>{faker.commerce.productName()}</p>
                                <h4 className='prodPrice'> Rs. {faker.commerce.price(300, 5000)}</h4>
                                <div className="starRating">
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span>(210)</span>
                                </div>

                            </div>
                        </div>
                        <div className="card searchCard">
                            <img className='cardImg searchCardImg' src={faker.image.fashion(240, 320, true)} alt="Avatar" />
                            <div className="like" onClick={handleClick} style={{ color: isActive ? 'red' : '' }} > <FaHeart size={25} /> </div>
                            <div className="viewProd"> <h3 className='viewTxt'>View Product</h3> </div>
                            <div className="cardInfo">
                                <p className='prodinfo'>{faker.commerce.productName()}</p>
                                <h4 className='prodPrice'> Rs. {faker.commerce.price(300, 5000)}</h4>
                                <div className="starRating">
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span>(210)</span>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="row cardDeck searchCardDeck">
                        <div className="card searchCard">
                            <img className='cardImg searchCardImg' src={faker.image.fashion(240, 320, true)} alt="Avatar" />
                            <div className="like" onClick={handleClick} style={{ color: isActive ? 'red' : '' }} > <FaHeart size={25} /> </div>
                            <div className="viewProd"> <h3 className='viewTxt'>View Product</h3> </div>
                            <div className="cardInfo">
                                <p className='prodinfo'>{faker.commerce.productName()}</p>
                                <h4 className='prodPrice'> Rs. {faker.commerce.price(300, 5000)}</h4>
                                <div className="starRating">
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span>(210)</span>
                                </div>

                            </div>
                        </div>
                        <div className="card searchCard">
                            <img className='cardImg searchCardImg' src={faker.image.fashion(240, 320, true)} alt="Avatar" />
                            <div className="like" onClick={handleClick} style={{ color: isActive ? 'red' : '' }} > <FaHeart size={25} /> </div>
                            <div className="viewProd"> <h3 className='viewTxt'>View Product</h3> </div>
                            <div className="cardInfo">
                                <p className='prodinfo'>{faker.commerce.productName()}</p>
                                <h4 className='prodPrice'> Rs. {faker.commerce.price(300, 5000)}</h4>
                                <div className="starRating">
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span>(210)</span>
                                </div>

                            </div>
                        </div>
                        <div className="card searchCard">
                            <img className='cardImg searchCardImg' src={faker.image.fashion(240, 320, true)} alt="Avatar" />
                            <div className="like" onClick={handleClick} style={{ color: isActive ? 'red' : '' }} > <FaHeart size={25} /> </div>
                            <div className="viewProd"> <h3 className='viewTxt'>View Product</h3> </div>
                            <div className="cardInfo">
                                <p className='prodinfo'>{faker.commerce.productName()}</p>
                                <h4 className='prodPrice'> Rs. {faker.commerce.price(300, 5000)}</h4>
                                <div className="starRating">
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span>(210)</span>
                                </div>

                            </div>
                        </div>
                        <div className="card searchCard">
                            <img className='cardImg searchCardImg' src={faker.image.fashion(240, 320, true)} alt="Avatar" />
                            <div className="like" onClick={handleClick} style={{ color: isActive ? 'red' : '' }} > <FaHeart size={25} /> </div>
                            <div className="viewProd"> <h3 className='viewTxt'>View Product</h3> </div>
                            <div className="cardInfo">
                                <p className='prodinfo'>{faker.commerce.productName()}</p>
                                <h4 className='prodPrice'> Rs. {faker.commerce.price(300, 5000)}</h4>
                                <div className="starRating">
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span className="star checked"><FaStar size={15} /></span>
                                    <span>(210)</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Search;