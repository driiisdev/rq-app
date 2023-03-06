import { useQuery } from 'react-query'
import axios from 'axios';

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const DynamicParallel = ({ heroIds }) => {
  return (
    <div>DynamicParallel</div>
  )
}

export default DynamicParallel;
