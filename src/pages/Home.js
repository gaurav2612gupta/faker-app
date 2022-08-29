import * as React from 'react';
import { FaSistrix } from "react-icons/fa";
import { useState } from 'react';

import faker from "faker";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Home = () => {

    const [isPop, setIspop] = useState(true);

    const popup = () => {
        setIspop(!isPop);
        if (isPop)
            console.log("poppedout");
        else
            console.log("not popped");
    }

    return (
        <div className="container home">
            <div className="row searchbar">
                <form action="/search" className='form'>
                    <input type="text" className='inputBox' placeholder="Search.." onClick={popup} name="search" />
                    <button type="submit" className='submitBtn' ><FaSistrix size={30} /></button>
                </form>
            </div>

            {!isPop && <div className="row trending">
                <div className="trendHeading">
                    <h3>Latest Trends</h3>
                </div>
                <div className="row cardDeck">
                    <div className="card">
                        <img className='cardImg' src={faker.image.fashion(120,160,true)} alt="Avatar" />
                        <div className="cardInfo">
                            <p> {faker.commerce.productName()} </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className='cardImg' src={faker.image.fashion(120,160,true)} alt="Avatar" />
                        <div className="cardInfo">
                            <p> {faker.commerce.productName()} </p>
                        </div>
                    </div>
                    <div className="card cardNone">
                        <img className='cardImg' src={faker.image.fashion(120,160,true)} alt="Avatar" />
                        <div className="cardInfo">
                            <p> {faker.commerce.productName()} </p>
                        </div>
                    </div>
                    <div className="card cardNone">
                        <img className='cardImg' src={faker.image.fashion(120,160,true)} alt="Avatar" />
                        <div className="cardInfo">
                            <p> {faker.commerce.productName()} </p>
                        </div>
                    </div>
                    <div className="card cardNone">
                        <img className='cardImg' src={faker.image.fashion(120,160,true)} alt="Avatar" />
                        <div className="cardInfo">
                            <p> {faker.commerce.productName()} </p>
                        </div>
                    </div>
                </div>

                <div className="heading">
                    <h3 className='trendHeading'>Popular Suggestions</h3>
                    <p className='sugg'>{faker.commerce.productName()}</p>
                    <p className='sugg'>{faker.commerce.productName()}</p>
                    <p className='sugg'>{faker.commerce.productName()}</p>
                    <p className='sugg'>{faker.commerce.productName()}</p>
                    <p className='sugg'>{faker.commerce.productName()}</p>
                </div>
            </div>}
        </div >
    )
}

export default Home;