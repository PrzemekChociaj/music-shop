import React from 'react';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import HipHop from '../Categories/HipHop/HipHop';

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
