import React from 'react';
import Rock from '../Categories/MusicGenre/variants/Rock';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';

import Newsletter from '../Newsletter/Newsletter';
import Navbar from '../Header/Navbar';

const RockPage = () => {
	return (
		<>
			<Discount />
			<Navbar />
			<Rock />
			<Newsletter />
			<Footer />
		</>
	);
};

export default RockPage;
