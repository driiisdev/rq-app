import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetSuperHeroes, useAddSuperHeroes } from "../hooks/useSuperHeroes";

const onSuccess = (data) =>{
  console.log('data fetching successful', data);
}

const onError = (error) =>{
  console.log('data fetching unsuccessful', error);
}

const Form = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')
  const { 
    isLoading, 
    data, 
    isError, 
    error, 
    refetch
  } = useGetSuperHeroes(onSuccess, onError);

  const { mutate } = useAddSuperHeroes();

  const handleAddHeroClick = () => {
    console.log({name, alterEgo});
    const hero = { name, alterEgo };
    mutate(hero);
  }

  if (isLoading) {
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

export default Form;
