import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';

const schema = yup.object({
	email: yup.string().email().required('Should be valid email address!'),
	password: yup.string().min(8, 'Password must be 8 characters long'),
});

const Containers = styled.div`
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
const Buttons = styled.button`
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

const LoginPage = (props: any) => {
	const navigate = useNavigate();
	const RegisterNavigate = () => {
		navigate('/Register');
	};

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	const styles = {
		input: {
			color: 'white',
		},
	};

	const { classes } = props;

	const theme = createTheme();

	return (
		<ThemeProvider theme={theme}>
			<Containers>
				<Container component='main' maxWidth='xs'>
					<CssBaseline />
					<Box
						sx={{
							marginTop: 8,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							bgcolor: 'white',
							width: '400px',
						}}>
						<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h4'>
							Sign in
						</Typography>
						<Box
							onSubmit={handleSubmit(onSubmit)}
							component='form'
							noValidate
							sx={{ mt: 1 }}>
							<TextField
								{...register('email', { required: true })}
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
								InputProps={{ inputProps: { style: { color: '#fff' } } }}
							/>
							{errors.email?.message}
							<TextField
								{...register('password', { required: true })}
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
							{errors.password?.message}
							<FormControlLabel
								control={<Checkbox value='remember' color='primary' />}
								label='Remember me'
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}>
								Sign In
							</Button>
							<Grid container>
								<Grid item>
									<Link href='/Register' variant='body2'>
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</Containers>
		</ThemeProvider>
	);
};

export default LoginPage;
