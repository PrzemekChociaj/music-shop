import React from 'react';
import styled from 'styled-components';

const Categories = () => {
	const CategoriesContainer = styled.div`
	color: #ffffff;
	font-weight:bold;
		border-radius: 1px;
		background-color: #e4dada;
		height: 900px;
		width: 300px;
		margin-top: 10px;
		flex-direction: column;
		font-family: 'Roboto Condensed', sans-serif;

		display: flex;
  height: 100vh;
  align-items: center;
  text-align: center;
  background: #1A1E23;
	
	;`

	const Category = styled.div`
	margin-top:40px;
		    position: relative;
      display: block;
      padding: 4px 0;
	  font-family: 'Roboto Condensed', sans-serif;
	  width:100%;

      color: #ecf0f1;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
	  text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
	  position: relative;
      display: block;
      padding: 4px 0;
      color: #ecf0f1;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
	  cursor:pointer;

      &::after {
        position: absolute;
        content: "";
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
			<Category>Hip Hop</Category>
			<Category>Rock </Category>
			<Category> Metal </Category>
			<Category> Blues</Category>
			<Category> Pop </Category>
		</CategoriesContainer>
	);
};

export default Categories;
