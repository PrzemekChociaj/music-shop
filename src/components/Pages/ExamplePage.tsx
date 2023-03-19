import Footer from '../Footer/Footer';
import Discount from '../Header/Discount';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import styled from 'styled-components';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

const Container = styled.div`
	height: 100vh;
	display: flex;
`;
const ImageContainer = styled.div`
	display: flex;
	flex: 1;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;

const AmountContainer = styled.div`
	display: flex;
	margin-top: 10px;
`;
const Amount = styled.span`
	margin-left: 10px;
	border: 1px solid black;
	width: 30px;
	height: 25px;
	align-items: center;
	text-align: center;
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Image = styled.img`
	object-fit: cover;
	height: 80vh;
`;
const Description = styled.div`
	margin: 20px 0px;
`;
const Button = styled.button`
	margin-left: 20px;
	border: 1px solid black;
`;
const Price = styled.span`
	font-weight: 200;
	font-size: 40px;
`;

const AddContainer = styled.div`
	border: 1px solid black;
	height: 25px;
	margin-left: 10px;
	cursor: pointer;
`;
const RemoveContainer = styled.div`
	border: 1px solid black;
	height: 25px;
	cursor: pointer;
`;

const ExamplePage = () => {
	const [amount, setAmount] = useState(1);

	const Add = () => {
		setAmount(amount + 1);
	};

	const Remove = () => {
		if (amount > 1) {
			setAmount(amount - 1);
		}
	};
	return (
		<>
			<Discount />
			<Header />
			<Container>
				<ImageContainer>
					<Image src='https://ecsmedia.pl/c/thriller-b-iext124301159.jpg'></Image>
				</ImageContainer>
				<InfoContainer>
					<Title>Example Product Page</Title>
					<Description>
						em ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						eget tristique nulla, sit amet commodo lorem. Suspendisse leo eros,
						luctus tincidunt tellus id, volutpat tempor tortor. Praesent euismod
						felis eu interdum finibus. Donec dignissim, libero eu tincidunt
						lacinia, velit ante porttitor mi, in dapibus odio dolor non libero.
						Integer interdum magna sit amet ante convallis condimentum. Donec
						nibh massa, viverra sed leo sed, dictum iaculis erat. Vestibulum mi
						lorem, laoreet ac vehicula vitae, bibendum a urna. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit. Curabitur sit amet justo id
						erat eleifend vehicula sed vitae dui. Donec mi neque, elementum eu
						nunc nec, accumsan bibendum purus. Nulla hendrerit nulla orci, id
						lobortis justo pulvinar sed. Praesent varius molestie magna a
						tristique.
					</Description>
					<Price> 20.00$</Price>
					<Button>
						<AddShoppingCartIcon />
					</Button>
					<AmountContainer>
						<RemoveContainer>
							<RemoveIcon onClick={Remove} />
						</RemoveContainer>
						<AddContainer>
							<AddIcon onClick={Add} />
						</AddContainer>
						<Amount>{amount}</Amount>
					</AmountContainer>
				</InfoContainer>
			</Container>
			<Newsletter />
			<Footer />
		</>
	);
};

export default ExamplePage;
