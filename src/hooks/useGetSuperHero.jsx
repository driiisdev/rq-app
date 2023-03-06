import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHero = ({queryKey}) => {
  const heroId = queryKey[1];
  return(axios.get(`http://localhost:4000/superheroes/${heroId}`));
}

const useGetSuperHero = (heroId) => {

  return useQuery(["superHeroes", heroId], fetchSuperHero);
}

export default useGetSuperHero;
