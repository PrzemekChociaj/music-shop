import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';

const schema = yup.object({
	name: yup.string().required('name is required!'),
	card: yup.string().required()
	.matches(/^[0-9]+$/, 'Must be only digits')
	.min(16, 'Must be exactly 16 digits')
	.max(16, 'Must be exactly 16 digits'),
	expiryDate: yup.string().required('Expiry Date is required!'),
	cvv:yup.string()
	.required()
	.matches(/^[0-9]+$/, 'Must be only digits')
	.min(3, 'Must be exactly 3 digits')
	.max(3, 'Must be exactly 3 digits'),
});

export default function PaymentForm() {


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



	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Payment method
			</Typography>
			<Box component='form' onSubmit={handleSubmit(onSubmit)} >
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
					{...register('name')}
						required
						id='cardName'
						label='Name on card'
						fullWidth
						autoComplete='cc-name'
						variant='standard'
					/>
						{errors.name?.message}
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
					{...register('card')}
						required
						id='cardNumber'
						label='Card number'
						fullWidth
						autoComplete='cc-number'
						variant='standard'
					/>
						{errors.card?.message}
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
					{...register('expiryDate')}
						required
						id='expDate'
						label='Expiry date'
						fullWidth
						autoComplete='cc-exp'
						variant='standard'
					/>
						{errors.expiryDate?.message}
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
					{...register('cvv')}
						required
						id='cvv'
						label='CVV'
						helperText='Last three digits on signature strip'
						fullWidth
						autoComplete='cc-csc'
						variant='standard'
					/>
					{errors.cvv?.message}
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
					{...register('remember')}
						control={<Checkbox color='secondary' name='saveCard' value='yes' />}
						label='Remember credit card details for next time'
					/>
				</Grid>
				<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
			</Grid>
			</Box>
		</React.Fragment>
	);
}
