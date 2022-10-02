export default function Static1() {
    // Valores que sao setados no server e mudam no client podem gerar errors
    // por exemplo o math.random que gera um numero aleatório

    // nesses casos podemos utilizar o useEffect para setar o valor

    // const [random, setRandom] = useState(0);

    // useEffect(() => {
    //     setRandom(Math.random());
    // }, []);

    return <div>Estático #1</div>;
}
