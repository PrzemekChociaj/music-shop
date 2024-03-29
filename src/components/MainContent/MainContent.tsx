import { ButtonBase } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
	const navigate = useNavigate();

	const shopHandler = () => {
		navigate('/Shop');
	};
	const MainContainer = styled.div`
		height: 80vh;
		width: 1580px;
		border-color: black;
		border-radius: 10px;
		float: center;
		position: absolute;
		left: 310px;
		bottom: 80px;

		background-image: url('https://img.freepik.com/free-photo/young-woman-summer-clothes-listening-music-wearing-headphones-singing-along-favorite-song-dancing-earphones-standing-against-blue-background_1258-122074.jpg?w=1800&t=st=1676928567~exp=1676929167~hmac=612d6f0c71d60a4eed6a9a20e79296aa8e4eae1f64d948e141910009e5faa968');
		background-repeat: no-repeat;
		background-size: cover;
	`;

	const Title = styled.h1`
		position: absolute;
		left: 1000px;
		font-family: 'Roboto Condensed', sans-serif;
	`;
	const Descripiton = styled.p`
		position: absolute;
		left: 1000px;
		bottom: 350px;
		font-family: 'Roboto Condensed', sans-serif;
		font-size: 20px;
	`;

	const Button = styled.button`
		position: absolute;
		top: 500px;
		left: 1100px;
		font-family: 'Roboto Condensed', sans-serif;
		height: 100px;
		width: 200px;
		border: 2px solid black;
	`;

	return (
		<MainContainer>
			<Title> Special Offer this week!</Title>
			<Descripiton>
				If u buy CD in our shop u get 20% discount on the second one!{' '}
			</Descripiton>
			<Button onClick={shopHandler}> SHOP NOW</Button>
		</MainContainer>
	);
};

export default MainContent;
