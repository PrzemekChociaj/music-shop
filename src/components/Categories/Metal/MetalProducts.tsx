import styled from 'styled-components';
import { popularMetalProducts } from '../../../DataBase/MetalData';
import MetalProduct from './MetalProduct';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const MetalProducts = () => {
	return (
		<Container>
			{popularMetalProducts.map((item) => (
				<MetalProduct item={item} key={item.id} />
			))}
		</Container>
	);
};

export default MetalProducts;
