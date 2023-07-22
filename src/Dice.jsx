import Die from "./Die"

export default function Dice({values,color}) {
  return (
    <div>
    {values.map((element,index)=>(
        <Die key={index} value={element} color={color}/>
    ))}
    </div>
  )
}