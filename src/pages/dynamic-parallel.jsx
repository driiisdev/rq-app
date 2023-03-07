import { useQueries } from 'react-query'
import axios from 'axios';

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const DynamicParallel = ({ heroIds }) => {
  const queryResult = useQueries(
    heroIds.map((id)=>{
      return({
        queryKey:["super-hero", id],
        queryFn: ()=> fetchSuperHeroes(id),
      });
    })
  );
  console.log("DynamicParallel", queryResult);
  return (
    <div>DynamicParallel</div>
  )
}

export default DynamicParallel;
