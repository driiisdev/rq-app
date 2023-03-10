import { Link } from "react-router-dom";
import { useGetSuperHeroes } from "../hooks/useSuperHeroes";

const onSuccess = (data) =>{
  console.log('data fetching successful', data);
}

const onError = (error) =>{
  console.log('data fetching unsuccessful', error);
}

const RqSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useGetSuperHeroes(onSuccess, onError);

  console.log({isLoading, isFetching});

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
      {/* {data?.map((heroName)=>{
          return(
            <div key={heroName}>{heroName}</div>
          );
        })} */}
    </>
  )
}

export default RqSuperHeroes;
