import React from 'react';
import { popularMetalProducts } from '../../../../DataBase/MetalData';
import MusicGenre from '../MusicGenre';

const Metal = () => {
	return <MusicGenre genre={'Metal'} redirectUrl={'/Metal'} database={popularMetalProducts} />;
};

export default Metal;
