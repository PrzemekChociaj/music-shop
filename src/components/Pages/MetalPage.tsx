import React from 'react';
import Metal from '../Categories/MusicGenre/variants/Metal';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';

import Newsletter from '../Newsletter/Newsletter';
import Navbar from '../Header/Navbar';

const MetalPage = () => {
	return (
		<>
			<Discount />
			<Navbar />
			<Metal />
			<Newsletter />
			<Footer />
		</>
	);
};

export default MetalPage;
