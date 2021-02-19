import { useParams } from "react-router-dom";

export default function Sport( {sport}){

  return (
    <article>
      <img width="100" src={sport.imageSrc} alt={sport.title} />
    </article>
  )
}