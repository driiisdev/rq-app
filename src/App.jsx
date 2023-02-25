import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/home'
import Nav from './components/nav'
import SuperHeroes from './components/superHeroes'
import RqSuperHeroes from './utils/rqSuperHeroes'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/super-heroes' element={<SuperHeroes/>}/>
        <Route path='/rq-super-heroes' element={<RqSuperHeroes/>}/>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App;
