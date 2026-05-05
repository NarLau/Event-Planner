import { useParams } from "react-router-dom"

export default function EventDetails (){
    const {id} = useParams();
    return(
        <div>
            <p>Welcome event to event nr: {id}</p>
        </div>
    )
};