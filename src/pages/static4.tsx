import { InferGetStaticPropsType } from "next";
import ProductItem from "../components/ProductItem";
import { Product } from "../types/Product";

// devemos executar o dev antes de executar o build quando fetch para api externa

export const getStaticProps = async () => {
    const response = await fetch("http://localhost:3000/api/produtos");
    const products: Product[] = await response.json();

    return {
        props: { products },
    };
};

export default function Static4(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return (
        <div>
            <h1># Estático 4</h1>
            <ProductItem products={props.products} />
        </div>
    );
}
