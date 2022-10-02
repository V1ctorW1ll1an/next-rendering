import { Product } from "../types/Product";

type Props = {
    products: Product[];
};

export default function ProductItem(props: Props) {
    return (
        <>
            {props.products.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.price}
                </li>
            ))}
        </>
    );
}
