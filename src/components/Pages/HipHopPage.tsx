import React from 'react';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Newsletter from '../Newsletter/Newsletter';
import MusicGenre from '../Categories/MusicGenre/MusicGenre';
import HipHop from '../Categories/MusicGenre/variants/HipHop';
import Navbar from '../Header/Navbar';

const HipHopPage = () => {
	return (
		<>
			<Discount />
			<Navbar />
			<HipHop />
			<Newsletter />
			<Footer />
		</>
	);
};

export default HipHopPage;
