import React from 'react';
import Metal from '../Categories/MusicGenre/variants/Metal';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';

const MetalPage = () => {
	return (
		<>
			<Discount />
			<Header />
			<Metal />
			<Newsletter />
			<Footer />
		</>
	);
};

export default MetalPage;
