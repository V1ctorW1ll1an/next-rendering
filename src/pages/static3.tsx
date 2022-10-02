import { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = {
    randomNumber: number;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const randomNumber = Math.random();

    return {
        revalidate: 10, // In seconds
        props: {
            randomNumber,
        },
    };
};

export default function Static3(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return <div>{props.randomNumber}</div>;
}
