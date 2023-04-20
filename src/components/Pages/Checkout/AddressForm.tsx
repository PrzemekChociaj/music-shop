import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';

const schema = yup.object({
	firstName: yup.string().required('First name is required!'),
	lastName: yup.string().required('last name is required!'),
	address: yup.string().required('Address is required!'),
	city: yup.string().required('City is required!'),
	region: yup.string().required('region is required!'),
	zip: yup
		.string()
		.required()
		.matches(/^[0-9]+$/, 'Must be only digits')
		.min(5, 'Must be exactly 5 digits')
		.max(5, 'Must be exactly 5 digits'),
	country: yup.string().required('Country is required!'),
});

export default function AddressForm() {
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
				Shipping address
			</Typography>
			<Box component='form' onSubmit={handleSubmit(onSubmit)} >
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('firstName')}
							required
							id='firstName'
							name='firstName'
							label='First name'
							fullWidth
							autoComplete='given-name'
							variant='standard'
						/>
						{errors.firstName?.message}
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('lastName')}
							required
							id='lastName'
							name='lastName'
							label='Last name'
							fullWidth
							autoComplete='family-name'
							variant='standard'
						/>
							{errors.lastName?.message}
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register('address')}
							required
							id='address1'
							name='address1'
							label='Address line 1'
							fullWidth
							autoComplete='shipping address-line1'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register('address')}
							id='address2'
							name='address2'
							label='Address line 2'
							fullWidth
							autoComplete='shipping address-line2'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('city')}
							required
							id='city'
							name='city'
							label='City'
							fullWidth
							autoComplete='shipping address-level2'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('region')}
							id='state'
							name='state'
							label='State/Province/Region'
							fullWidth
							variant='standard'
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('zip')}
							required
							id='zip'
							name='zip'
							label='Zip / Postal code'
							fullWidth
							autoComplete='shipping postal-code'
							variant='standard'
						/>
						{errors.zip?.message}
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('country')}
							required
							id='country'
							name='country'
							label='Country'
							fullWidth
							autoComplete='shipping country'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox
									{...register('remember')}
									color='secondary'
									name='saveAddress'
									value='yes'
								/>
							}
							label='Use this address for payment details'
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
