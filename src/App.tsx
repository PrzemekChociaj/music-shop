import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import HipHopPage from './components/Pages/HipHopPage';
import RockPage from './components/Pages/RockPage';
import PopPage from './components/Pages/PopPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/HipHop' element={<HipHopPage />}></Route>
			<Route path='/Rock' element={<RockPage />}></Route>
			<Route path='/Pop' element={<PopPage />}></Route>
		</Routes>
	);
}

export default App;
