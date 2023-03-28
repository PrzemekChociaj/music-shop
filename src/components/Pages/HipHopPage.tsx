import React from 'react';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import MusicGenre from '../Categories/MusicGenre/MusicGenre';
import HipHop from '../Categories/MusicGenre/variants/HipHop';

const HipHopPage = () => {
	return (
		<>
			<Discount />
			<Header />
			<HipHop />
			<Newsletter />
			<Footer />
		</>
	);
};

export default HipHopPage;
