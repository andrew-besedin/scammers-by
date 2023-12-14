import ScammerPage from "@/components/pages/scammer/scammer";
import scammers from "@/constants/api";

function Scammer(props: { params: { id: string } }) {
    return (
        <ScammerPage params={props.params} />
    )
}

export async function generateStaticParams() {
    return scammers.map((e, i) => ({
        id: i.toString()
    }))
}

export default Scammer;