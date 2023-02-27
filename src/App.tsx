import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import HipHopPage from './components/Pages/HipHopPage';
import RockPage from './components/Pages/RockPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/HipHop' element={<HipHopPage />}></Route>
			<Route path='/Rock' element={<RockPage />}></Route>
		</Routes>
	);
}

export default App;
