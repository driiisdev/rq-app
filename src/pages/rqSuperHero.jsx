import { useParams } from "react-router-dom";
import { useGetSuperHero } from "../hooks/useSuperHero";

const RqSuperHero = () => {
  const { heroId } = useParams();
  const {isLoading, data, isError, error} = useGetSuperHero(heroId);

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
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
}

export default RqSuperHero;
