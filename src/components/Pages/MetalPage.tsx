import React from 'react';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import Metal from '../Categories/Metal/Metal';

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
