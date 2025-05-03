import React from 'react';
import Spinner from './common/Spinner';
import BackToTop from './common/BackToTop';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Carousel from './sections/Carousel';
import Services from './sections/Services';
import About from './sections/About';
import Facts from './sections/Facts';
import Booking from './sections/Booking';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';

const Home: React.FC = () => {
    return (
        <div className="container-fluid">
            {/* <Spinner /> */}
            <Header />
            <Carousel />
            <About />
            <Facts />
            <Services />
            <Booking />
            <Team />
            <Testimonials />
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Home;