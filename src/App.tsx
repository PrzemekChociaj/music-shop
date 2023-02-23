import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import HipHop from './components/Pages/HipHopPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/HipHop' element={<HipHop />}>
				{' '}
			</Route>
		</Routes>
	);
}

export default App;
