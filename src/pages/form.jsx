import { useState } from "react";
import { Link } from "react-router-dom";
import GetSuperHeroes from "../hooks/useGetSuperHeroes";

const onSuccess = (data) =>{
  console.log('data fetching successful', data);
}

const onError = (error) =>{
  console.log('data fetching unsuccessful', error);
}

const RqSuperHeroes = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')
  const { 
    isLoading, 
    data, 
    isError, 
    error, 
    isFetching, 
    refetch 
  } = GetSuperHeroes(onSuccess, onError);

  const handleAddHeroClick = () => {
    console.log({name, alterEgo});
  }

  console.log({isLoading, isFetching});

  if (isLoading || isFetching) {
    return(
      <h2>Loading ...</h2>
    );
  }
  if (isError) {
    return(
      <h2>{error.message}</h2>
    );
  }

  return (
    <>
      <h2>RQ Super Heroes</h2>
      <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        <input type="text" value={alterEgo} onChange={(e)=> setAlterEgo(e.target.value)} />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>refetch</button>
      {
        data?.data.map((hero)=>{
          return(
            <div key={hero.id}>
              <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
            </div>
          )
        })
      }
    </>
  )
}

export default RqSuperHeroes;
