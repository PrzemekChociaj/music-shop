import React from 'react';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import Pop from '../Categories/Pop/Pop';

const PopPage = () => {
	return (
		<>
			<Discount />
			<Header />
			<Pop />
			<Newsletter />
			<Footer />
		</>
	);
};

export default PopPage;
