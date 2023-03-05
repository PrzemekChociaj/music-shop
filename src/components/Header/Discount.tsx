import React from 'react';
import styled from 'styled-components';

const Discount = () => {
	const Container = styled.div`
		height: 30px;
		background-color: teal;
		color: white;
		text-align: center;
		font-family: 'Roboto Condensed', sans-serif;
	`;
	return (
		<Container>Special Offer! Buy at least 2 CDs - pay 20% less!</Container>
	);
};

export default Discount;
