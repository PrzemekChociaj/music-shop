import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Categories = () => {
	const navigate = useNavigate();

	const HipHopHandler = () => {
		navigate('/HipHop');
	};
	const PopHandler = () => {
		navigate('/Pop');
	};

	const RockHandler = () => {
		navigate('/Rock');
	};

	const MetalHandler = () => {
		navigate('/Metal');
	};
	const CategoriesContainer = styled.div`
		color: #ffffff;
		font-weight: bold;
		border-radius: 1px;
		background-color: #e4dada;
		width: 300px;
		margin-top: 10px;
		flex-direction: column;
		font-family: 'Roboto Condensed', sans-serif;
		display: flex;
		height: 100vh;
		align-items: center;
		text-align: center;
		background: #0c0c0c;
		border-radius: 10px;
	`;

	const Category = styled.button`
		margin-top: 40px;
		display: block;
		padding: 4px 0;
		font-family: 'Roboto Condensed', sans-serif;
		width: 100%;
		color: #ffffff;
		transition: 0.5s;
		position: relative;
		display: block;
		padding: 4px 0;
		text-decoration: none;
		text-transform: uppercase;
		cursor: pointer;
		border: 1px solid white;
		background-color: #080808;
		border-radius: 1px;

		&::after {
			position: absolute;
			content: '';
			top: 100%;
			left: 0;
			width: 100%;
			height: 3px;
			background: #3498db;
			transform: scaleX(0);
			transform-origin: right;
			transition: transform 0.5s;
		}

		&:hover {
			color: #95a5a6;
		}

		&:hover::after {
			transform: scaleX(1);
			transform-origin: left;
		}
	`;
	return (
		<CategoriesContainer>
			Categories
			<Category onClick={HipHopHandler}>Hip Hop</Category>
			<Category onClick={RockHandler}>Rock </Category>
			<Category onClick={MetalHandler}> Metal </Category>
			<Category onClick={PopHandler}> Pop </Category>
		</CategoriesContainer>
	);
};

export default Categories;
