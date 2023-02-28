import React from 'react';
import styled from 'styled-components';
import { popularMetalProducts } from '../../../DataBase/MetalData';
import MetalProducts from './MetalProducts';

const Container = styled.div`
	border: 1px solid grey;
	margin-top: 10px;
	height: 100vh;
`;

const FilterContainer = styled.div``;
const Filter = styled.div``;
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
`;
const Title = styled.h1``;
const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
`;

const Top = styled.div`
	height: 41vh;
	background-color: grey;
	display: flex; ;
`;
const Bottom = styled.div`
	height: 41vh;
	background-color: green;
`;
const ImageContainer = styled.div`
	display: flex;
	flex: 1;
`;

const Option = styled.option``;

const Metal = () => {
	return (
		<Container>
			<Title> Pop</Title>
			<FilterContainer>
				<Filter>
					<FilterText> Sort Products: </FilterText>
					<Select>
						<Option>Newest</Option>
						<Option> Price (asc) </Option>
						<Option> Price (desc) </Option>
					</Select>
				</Filter>
			</FilterContainer>
			<MetalProducts />
		</Container>
	);
};

export default Metal;
