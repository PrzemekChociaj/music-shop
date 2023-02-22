import React from 'react';
import styled from 'styled-components';
import MailIcon from '@mui/icons-material/Mail';

const Newsletter = () => {
	const Container = styled.div`
		height: 60vh;
		background-color: #92b3b0;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 100px;
		flex-direction: column;
		font-family: 'Roboto Condensed', sans-serif;
	`;
	const Title = styled.h1`
		font-size: 70px;
		margin-bottom: 20px;
	`;

	const Description = styled.div`
		font-size: 24px;
		font-weight: 300;
		margin-bottom: 20px;
	`;

	const InputContainer = styled.div`
		width: 40%;
		height: 40px;
		background-color: white;
		display: flex;
		border: 1px solid black;
		justify-content: space-between;
	`;

	const Input = styled.input`
		border: none;
		width: 100%;
		padding-left: 20px;
	`;
	const Button = styled.button`
		color: white;
		background-color: teal;
		border-radius: 1px;
	`;

	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>Get updates from your favorite products!</Description>
			<InputContainer>
				<Input />
				<Button>
					<MailIcon />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
