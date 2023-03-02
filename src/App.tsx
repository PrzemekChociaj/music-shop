import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import HipHopPage from './components/Pages/HipHopPage';
import RockPage from './components/Pages/RockPage';
import PopPage from './components/Pages/PopPage';
import MetalPage from './components/Pages/MetalPage';
import ExamplePage from './components/Pages/ExamplePage';
import RegisterPage from './components/Pages/RegisterPage';
import LoginPage from './components/Pages/LoginPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/HipHop' element={<HipHopPage />}></Route>
			<Route path='/Rock' element={<RockPage />}></Route>
			<Route path='/Pop' element={<PopPage />}></Route>
			<Route path='/Metal' element={<MetalPage />}></Route>
			<Route path='/ExamplePage' element={<ExamplePage />}></Route>
			<Route path='/Register' element={<RegisterPage />}></Route>
			<Route path='/Login' element={<LoginPage />}></Route>
		</Routes>
	);
}

export default App;
