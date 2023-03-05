import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	height: 30vh;
	color: white;
	font-family: 'Roboto Condensed', sans-serif;
	background-color: #1d1d1d;
`;
const Left = styled.div`
	display: flex;
	flex: 1;
	margin-left: 10px;
	margin-top: 10px; ;
`;
const Right = styled.div`
	display: flex;
	flex: 1;
	margin-left: 10px;
	margin-top: 10px;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;
const Center = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
`;

const Contact = styled.div`
	display: flex;
	align-items: center;
	padding-top: 10px;
`;
const Adress = styled.div`
	display: flex;
	align-items: center;
	padding-top: 10px;
`;
const Mail = styled.div`
	display: flex;
	align-items: center;
	padding-top: 10px;
`;

const ScrollUp = styled.button`
	margin-top: 10px;
	display: flex;
	align-items: center;
	position: relative;
	left: 200px;
	top: 50px;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const ScrollHandler = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};
const Footer = () => {
	return (
		<Container>
			<Left>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</Left>
			<Center></Center>
			<Right>
				<Contact>
					<PhoneIcon /> Tel: +48 235 822 753
				</Contact>
				<Adress>
					<LocationOnIcon /> Świetojańska 35/7 Karnutury
				</Adress>
				<Mail>
					<EmailIcon />
					Mail: MaklerOffice@mail.dev
				</Mail>
				<ScrollUp onClick={ScrollHandler}>
					<ArrowUpwardIcon />{' '}
				</ScrollUp>
			</Right>
		</Container>
	);
};

export default Footer;
