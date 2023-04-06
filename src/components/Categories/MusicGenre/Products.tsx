import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { popularHipHopProducts } from '../../../DataBase/HipHopdata';
import { MusicProductItem } from '../../../types/musicGenreTypes';
import Product from './Product';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
type Props = {
	database: MusicProductItem[];
};
const Products: FunctionComponent<Props> = ({ database }) => {
	return (
		<Container>
			{database.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Products;
