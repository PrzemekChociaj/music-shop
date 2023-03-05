import styled from 'styled-components';
import { popularRockProducts } from '../../../DataBase/RockData';
import RockProduct from './RockProduct';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const RockProducts = () => {
	return (
		<Container>
			{popularRockProducts.map((item) => (
				<RockProduct item={item} key={item.id} />
			))}
		</Container>
	);
};

export default RockProducts;
