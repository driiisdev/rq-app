import { useQuery } from "react-query";
import axios from "axios";

const GetSuperHeroes = (onSuccess, onError) => {

  const fetchSuperHeroes = () => {
    return( axios.get('http://localhost:4000/superHeroes'))
  }

  return (
    useQuery("superHeroes", fetchSuperHeroes, {
      enabled: false,
      onSuccess,
      onError,
      select: (data)=>{
      const superHeroNames =  data.data.map((hero)=>hero.name);
      return superHeroNames
      },
    })
  )
}

export default GetSuperHeroes;