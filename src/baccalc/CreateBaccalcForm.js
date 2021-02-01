import {useParams} from "react-router-dom";


export default function CreateBaccalcForm(props) {
    let { section } = useParams();
    return (
        <p>{section}</p>
    );
}

