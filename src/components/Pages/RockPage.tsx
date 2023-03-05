import React from 'react';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import Rock from '../Categories/Rock/Rock';

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
