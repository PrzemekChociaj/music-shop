import React from 'react';
import { popularHipHopProducts } from '../../../../DataBase/data';
import MusicGenre from '../MusicGenre';

const HipHop = () => {
	return <MusicGenre genre={'HipHop'} redirectUrl={'/HipHop'} database={popularHipHopProducts} />;
};

export default HipHop;
