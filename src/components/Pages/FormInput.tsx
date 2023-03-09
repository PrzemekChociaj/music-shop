import { useState } from 'react';
import styled from 'styled-components';

const FormRegister = styled.form`
	display: flex;
	flex-direction: column;
	width: 280px;

	input {
		padding: 15px;
		margin: 10px 0px;
		border-radius: 5px;
		border: 1px solid gray;
	}

	label {
		font-size: 12px;
		color: gray;
	}

	span {
		font-size: 12px;
		padding: 3px;
		color: red;
		display: none;
	}

	input:invalid[focused='true'] {
		border: 1px solid rgb(255, 0, 0);
	}

	input:invalid[focused='true'] ~ span {
		display: block;
	}
`;

const FormInput = (props) => {
	const [focused, setFocused] = useState(false);
	const { label, errorMessage, onChange, id, ...inputProps } = props;

	const handleFocus = (event) => {
		setFocused(true);
	};

	return (
		<FormRegister>
			<label>{label}</label>
			<input
				{...inputProps}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={() =>
					inputProps.name === 'confirmPassword' && setFocused(true)
				}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</FormRegister>
	);
};

export default FormInput;
