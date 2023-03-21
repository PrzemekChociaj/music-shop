import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

const Container = styled.div`
	font-family: 'Montserrat', sans-serif;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	height: 100vh;
	width: 100vw;
	align-items: center;
	justify-content: center;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)),
		url('https://img.freepik.com/free-photo/girl-red-wall-with-headphones_1157-34359.jpg?w=1380&t=st=1677774130~exp=1677774730~hmac=aaafd50eb351fe09e398e020b1454a4e2c4fe4b987a1704c54dbe7d95a341914');
`;

const Wrapper = styled.div`
	padding: 20px;
	width: 40%;
	background-color: white;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 400;
	display: flex;
	text-align: center;
	justify-content: center;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;
const Button = styled.button`
	text-align: center;
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #231881;
	color: white;
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const RegisterPage = () => {
	return (
		<Container>
			<Wrapper>
				<FormInput />
			</Wrapper>
		</Container>
	);
};

export default RegisterPage;
