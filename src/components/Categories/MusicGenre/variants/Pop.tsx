import React from 'react';
import { popularPopProducts } from '../../../../DataBase/PopData';
import MusicGenre from '../MusicGenre';

const Pop = () => {
	return <MusicGenre genre={'Pop'} database={popularPopProducts} />;
};

export default Pop;
