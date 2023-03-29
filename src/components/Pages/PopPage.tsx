import React from 'react';
import Pop from '../Categories/MusicGenre/variants/Pop';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';

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
