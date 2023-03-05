import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CdList = () => {
	const navigate = useNavigate();

	const ExamplePageHandler = () => {
		navigate('/ExamplePage');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const Container = styled.div`
		height: 100vh;
		background-color: aliceblue;
		display: flex;
		font-family: 'Roboto Condensed', sans-serif;
	`;

	const ImageContainer = styled.div`
		padding-top: 100px;
		display: flex;
		flex: 1;
		align-items: center;
		text-align: center;
		border: 1px solid black;
		flex-direction: column;
		cursor: pointer;
	`;

	const HipHopImage = styled.div`
		background-image: url('https://ecsmedia.pl/c/czarno-na-bialym-b-iext97578038.jpg');
		background-size: cover;
		height: 60vh;
		width: 500px;
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: scale(1.1);
		}
	`;

	const RockImage = styled.div`
		background-image: url('https://ecsmedia.pl/c/nevermind-remastered-b-iext123060262.jpg');
		background-size: cover;
		height: 60vh;
		width: 500px;
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: scale(1.1);
		}
	`;

	const PopImage = styled.div`
		background-image: url('https://ecsmedia.pl/c/sanah-spiewa-poezyje-b-iext123420228.jpg');
		background-size: cover;
		height: 60vh;
		width: 500px;
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: scale(1.1);
		}
	`;

	const Title = styled.h2`
		padding-bottom: 30px;
	`;

	return (
		<Container>
			<ImageContainer onClick={ExamplePageHandler}>
				<Title>Hip Hop - Gibbs - Czarno na białym</Title>
				<HipHopImage />
			</ImageContainer>
			<ImageContainer onClick={ExamplePageHandler}>
				<Title>Pop - Sanah - Śpiewa Poezyje</Title>
				<PopImage />
			</ImageContainer>
			<ImageContainer onClick={ExamplePageHandler}>
				<Title>Rock - Nirvana - Nevermind</Title>
				<RockImage />
			</ImageContainer>
		</Container>
	);
};

export default CdList;
