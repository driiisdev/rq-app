import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}
const fetchSuperFriends = () => {
  return axios.get('http://localhost:4000/friends')
}

const RqParallel = () => {

  const {data:superHeroes} = useQuery("super-heroes", fetchSuperHeroes);
  const {data:friends} = useQuery("friends", fetchSuperFriends);

  return (
    <div>
      Opor
    </div>
  )
}

export default RqParallel;