export const addressFormSchema = yup.object({
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
