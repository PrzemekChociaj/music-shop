import styled from 'styled-components';
import { popularPopProducts } from '../../../DataBase/PopData';
import PopProduct from './PopProduct';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const PopProducts = () => {
	return (
		<Container>
			{popularPopProducts.map((item) => (
				<PopProduct item={item} key={item.id} />
			))}
		</Container>
	);
};

export default PopProducts;
