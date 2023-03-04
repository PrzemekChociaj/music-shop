import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
		url('https://img.freepik.com/free-photo/portrait-satisfied-girl-without-makeup-headphones-pink-wall-model-smiling-while-listening-pleasant-melody_197531-14244.jpg?w=1380&t=st=1677775795~exp=1677776395~hmac=40fee3d17c76b031eef087c537079e18cd97f184e238fc60c2cad19bcd4938e7');
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
const Register = styled.span`
	display: flex;
	justify-content: center;
	text-decoration: underline;
	cursor: pointer;
	margin-top: 10px;
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

const LoginPage = () => {
	const navigate = useNavigate();
	const RegisterNavigate = () => {
		navigate('/Register');
	};
	return (
		<Container>
			<Wrapper>
				<Title>LOGIN</Title>
				<Form>
					<Input placeholder='Username'></Input>
					<Input placeholder='Password'></Input>

					<Button> LOGIN </Button>
				</Form>
				<Register onClick={RegisterNavigate}>
					Don't have an account? Sign Up!
				</Register>
			</Wrapper>
		</Container>
	);
};

export default LoginPage;
