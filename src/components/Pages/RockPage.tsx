import React from 'react';
import Rock from '../Categories/MusicGenre/variants/Rock';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';

const RockPage = () => {
	return (
		<>
			<Discount />
			<Header />
			<Rock />
			<Newsletter />
			<Footer />
		</>
	);
};

export default RockPage;
