import React from 'react';
import Categories from '../Categories/Categories';
import CdList from '../CdList/CdList';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
	return (
		<>
			<Discount />
			<Header />
			<Categories />
			<MainContent />
			<CdList />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Home;
