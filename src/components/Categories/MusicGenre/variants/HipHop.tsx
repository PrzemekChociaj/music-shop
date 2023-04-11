import React from 'react';
import { popularHipHopProducts } from '../../../DataBase/HipHopdata';
import MusicGenre from '../MusicGenre';

const HipHop = () => {
	return <MusicGenre genre={'HipHop'} database={popularHipHopProducts} />;
};

export default HipHop;
