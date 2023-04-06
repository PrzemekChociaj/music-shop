import React from 'react';
import { popularMetalProducts } from '../../../../DataBase/MetalData';
import MusicGenre from '../MusicGenre';
import { useParams } from 'react-router-dom';
import { SHOP_PRODUCTS } from '../../../../DataBase/WholeDatabase';

const Metal = () => {
	return <MusicGenre genre={'Metal'} database={popularMetalProducts} />;
};

export default Metal;
