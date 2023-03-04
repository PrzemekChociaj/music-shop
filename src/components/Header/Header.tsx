import Button from '@mui/material/Button';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge, IconButton, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	height: 60px;
	background-color: white;
	margin-bottom: 20px;
`;
const Home = styled.button``;
const Logo = styled.h3`
	font-weight: bold;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
`;

const RightItems = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`;

const Header = () => {
	const navigate = useNavigate();

	const HomeHandler = () => {
		navigate('/');
	};

	const RegisterNavigate = () => {
		navigate('/Register');
	};

	const LoginNavigate = () => {
		navigate('/Login');
	};

	const ShopNavigate = () => {
		navigate('/Shop');
	};
	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Home onClick={HomeHandler}>
							<HomeIcon />
						</Home>
						<SearchContainer>
							<Input />
							<SearchOutlinedIcon />
						</SearchContainer>
					</Left>
					<Center>
						<Logo> MAKLER ZONE </Logo>
					</Center>
					<Right>
						<RightItems onClick={RegisterNavigate}>REGISTER</RightItems>
						<RightItems onClick={LoginNavigate}> LOGIN</RightItems>
						<RightItems>
							<Badge badgeContent={4} color='primary'>
								<AddShoppingCartIcon onClick={ShopNavigate} />
							</Badge>
						</RightItems>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
};

export default Header;
