import React from 'react';
import { popularRockProducts } from '../../../../DataBase/RockData';
import MusicGenre from '../MusicGenre';

const Rock = () => {
	return <MusicGenre genre={'HipHop'} redirectUrl={'/HipHop'} database={popularRockProducts} />;
};

export default Rock;
