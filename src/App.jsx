import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './pages/home';
import Nav from './components/nav';
import SuperHeroes from './pages/superHeroes';
import RqSuperHeroes from './pages/rqSuperHeroes';
import RqSuperHero from './pages/rqSuperHero';
import RqParallel from './pages/rq-parallel';
import DynamicParallel from './pages/dynamic-parallel';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/super-heroes' element={<SuperHeroes/>}/>
        <Route path='/rq-super-heroes' element={<RqSuperHeroes/>}/>
        <Route path='/rq-super-heroes/:heroId' element={<RqSuperHero/>}/>
        <Route path='/rq-parallel' element={<RqParallel/>}/>
        <Route path='/dynamic-parallel' element={<DynamicParallel heroIds={[1, 3]}/>}/>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App;
