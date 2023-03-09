import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchSuperHero = ({queryKey}) => {
  const heroId = queryKey[1];
  return(axios.get(`http://localhost:4000/superheroes/${heroId}`));
}

const useGetSuperHero = (heroId) => {
  const queryClient = useQueryClient()
  return useQuery(["superHero", heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
      .getQueryData("superHeroes")
      ?.data?.find(hero => hero.id === parseInt(heroId))
      if (hero) {
        // console.log(hero);
        // console.log("works");
        return({data: hero});
      }else{
        // console.log("doesnt work");
        return (undefined);
      }
    }
  })
}

export default useGetSuperHero;
