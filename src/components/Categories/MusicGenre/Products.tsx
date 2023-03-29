import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { popularHipHopProducts } from '../../../DataBase/data';
import { MusicProductItem } from '../../../types/musicGenreTypes';
import Product from './Product';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
type Props = {
	products: MusicProductItem[];
	redirectUrl: string;
};
const Products: FunctionComponent<Props> = ({ products, redirectUrl }) => {
	return (
		<Container>
			{products.map((item) => (
				<Product item={item} key={item.id} redirectUrl={redirectUrl} />
			))}
		</Container>
	);
};

export default Products;
