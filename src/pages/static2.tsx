import { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = {
    randomNumber: number;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const randomNumber = Math.random();

    return {
        props: {
            randomNumber,
        },
    };
};

export default function Static2(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return <div>{props.randomNumber}</div>;
}
