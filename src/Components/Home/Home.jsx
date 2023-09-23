import React from 'react';
import background from "../../assets/images/home-bg.jpg";
import fakeData from '../FakeData/FakeData';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeReview from './HomeReview/HomeReview';
import HomeOffer from './HomeOffer/HomeOffer';



const Home = () => {

    return (
        <>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeReview></HomeReview>
            <HomeOffer></HomeOffer>
        </> 
    );
};



export default Home;