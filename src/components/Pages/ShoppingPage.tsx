import React from 'react';
import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	border: 1px solid black;
	width: 100vw;
`;
const Wrapper = styled.div`
	padding: 10px;
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 10vh;
`;
const Bottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80vh;
`;
const TopButton = styled.button``;
const Products = styled.div`
	flex: 3;
	background-color: blue;
`;
const Summary = styled.div`
	flex: 1;
	background-color: red; ;
`;
const Title = styled.h1`
	text-align: center;
`;
const ShoppingPage = () => {
	return (
		<>
			<Discount />
			<Header />
			<Container>
				<Wrapper>
					<Title>YOUR BAG</Title>
					<Top>
						<TopButton>dada</TopButton>
						<Products>INFO</Products>
					</Top>
					<Bottom>
						<Summary> SUMMARY </Summary>
					</Bottom>
				</Wrapper>
			</Container>
			<Newsletter />
			<Footer />
		</>
	);
};

export default ShoppingPage;
