import React from 'react';
import styled from 'styled-components';
const CdList = () => {
	const Container = styled.div`
		height: 100vh;
		background-color: aliceblue;
		display: flex;
	`;

	const ImageContainer = styled.div`
	margin-top:10px;
	padding-top:100px;
		display: flex;
		flex: 1;
		align-items: center;
		text-align: center;
		border: 1px solid black;
		flex-direction: column;
		
	`;

	const HipHopImage = styled.div`
	background-image:url('https://ecsmedia.pl/c/czarno-na-bialym-b-iext97578038.jpg');
	background-size:cover;
	height:60vh;
	width:500px;
	transition: all .2s ease-in-out;
	&:hover {
		transform: scale(1.1); 
	}
	 `



	const RockImage = styled.div`
	background-image:url('https://ecsmedia.pl/c/nevermind-remastered-b-iext123060262.jpg');
	background-size:cover;
	height:60vh;
	width:500px;
	transition: all .2s ease-in-out;
	&:hover {
		transform: scale(1.1); 
	}`
	const PopImage = styled.div`
	background-image:url('https://ecsmedia.pl/c/sanah-spiewa-poezyje-b-iext123420228.jpg');
	background-size:cover;
	height:60vh;
	width:500px;
	transition: all .2s ease-in-out;
	&:hover {
		transform: scale(1.1); 
	}`

	const Title = styled.h2`
	padding-bottom:10px;`;

	return (
		<Container>
			<ImageContainer>
				<Title>Hip Hop - Gibbs - Czarno na białym</Title>
				<HipHopImage> </HipHopImage>
			</ImageContainer>
			<ImageContainer>
				<Title>Pop - Sanah - Śpiewa Poezyje</Title>
				<PopImage></PopImage>
			</ImageContainer>
			<ImageContainer>
				<Title>Rock - Nirvana - Nevermind</Title>
				<RockImage></RockImage>
			</ImageContainer>
		</Container>
	);
};

export default CdList;
