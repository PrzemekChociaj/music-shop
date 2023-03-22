import * as React from 'react';
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
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
	firstName: yup.string().required('First name is required!'),
	lastName: yup.string().required('last name is required!'),
	email: yup.string().email().required('Should be valid email address!'),
	password: yup
		.string()
		.min(8, 'Password must be 8 characters long')
		.matches(/[0-9]/, 'Password requires a number')
		.matches(/[a-z]/, 'Password requires a lowercase letter')
		.matches(/[A-Z]/, 'Password requires an uppercase letter')
		.matches(/[^\w]/, 'Password requires a symbol'),
});



const theme = createTheme();

const FormInput = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset,
	} = useForm({
			resolver: yupResolver(schema),
		},
	});

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						CREATE ACCOUNT
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit(onSubmit)}
						sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									{...register('firstName', { required: true })}
									autoComplete='given-name'
									name='firstName'
									required
									fullWidth
									id='firstName'
									label='First Name'
									autoFocus
								/>
								{errors.firstName?.message}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									{...register('lastName',)}
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									autoComplete='family-name'
								/>
								{errors.lastName?.message}
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register('email', { required: true })}
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							<p>	{errors.email?.message} </p>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register('password',)}
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
								/>
								{errors.password?.message}
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											{...register('remember')}
											name='remember'
											value='allowExtraEmails'
											color='primary'
											
										/>
									}
									label='I want to receive inspiration, marketing promotions and updates via email.'
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link href='http://127.0.0.1:5173/Login' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default FormInput;
