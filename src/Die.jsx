import "./Die.css"

export default function Die({value,color}){
    return (
        <>
            <p className="Die" style={{backgroundColor:color}}>{value}</p>
        </>
    )
}