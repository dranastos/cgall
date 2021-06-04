import React from 'react'
import ArtistToFollow from './components/ArtistToFollow'
import Exclusive from './components/Exclusive'
import FeaturedCategories from './components/FeaturedCategories'
import HomeHero from './components/HomeHero'
import MainNav from './components/MainNav'
import PopularArtist from './components/PopularArtist'
import TrendingTags from './components/TrendingTags'
import TrendingTags2 from './components/TrendingTags2'
import Testimonial from './components/Testimonial'
import Clients_top from './components/Clients_top'
import Clients_brand from './components/Clients_brand'
import Userfooter from './components/Userfooter'

function HomePage() {
    return (
        <>  
            <MainNav/>
            <HomeHero/>
            <Exclusive/>
            <FeaturedCategories/>
            <PopularArtist/>
            <TrendingTags/>
            <ArtistToFollow/>
            <TrendingTags2/>
            <Testimonial/>
            <Clients_top/>
            <Clients_brand />
            <Userfooter/>
        </>
    )
}

export default HomePage
