import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Props = {
    number?: number;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
    context
) => {
    return {
        props: {
            number: Math.random(),
        },
    };
};

export default function Dinamico1(
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
    return (
        <div>
            <h1># Dinâmico 1</h1>
            {props.number}
        </div>
    );
}
