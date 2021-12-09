import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import RQSuperHeroPage from './components/RQSuperHero.page'
import './App.css';
import { ParallelQueriesPage } from './components/ParallelQueries.page'
import { DynamicParallelPage } from './components/DynamicParallel.page'
import { DependentQueriesPage } from './components/DependentQueries.page'
import { PaginatedQueriesPage } from './components/PaginatedQueries,page'
import { InfiniteQueriesPage } from './components/InfiniteQueries.page'
import { RQSuperHeroesMutationPage } from './components/RQSuperHeroesMutation.page'
import { RQSuperHeroesAxiosInterceptorPage } from './components/RQSuperHeroesAxiosInterceptor.page'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-parallel'>RQ Super Heroes and Friends</Link>
              </li>
              <li>
                <Link to='/rq-dynamic-parallel'>RQ Super Heroes Dynamic</Link>
              </li>
              <li>
                <Link to='/rq-dependent'>RQ users dependent</Link>
              </li>
              <li>
                <Link to='/rq-paginated'>RQ Colors Paginated</Link>
              </li>
              <li>
                <Link to='/rq-infinite'>RQ Colors infinite</Link>
              </li>
              <li>
                <Link to='/rq-mutation'>RQ Add hero data</Link>
              </li>
              <li>
                <Link to='/rq-mutation-Axios-Interceptor'>RQ Add hero data axios interceptor</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/rq-mutation-Axios-Interceptor'>
              <RQSuperHeroesAxiosInterceptorPage/>
            </Route>
            <Route path='/rq-mutation'>
              <RQSuperHeroesMutationPage/>
            </Route>
            <Route path='/rq-infinite'>
              <InfiniteQueriesPage/>
            </Route>
            <Route path='/rq-paginated'>
              <PaginatedQueriesPage/>
            </Route>
            <Route path='/rq-dependent'>
              <DependentQueriesPage email='nidhi@gmail.com'/>
            </Route>
            <Route path='/rq-dynamic-parallel'>
              <DynamicParallelPage heroIds={[1, 3]} />
            </Route>
            <Route path='/rq-parallel'>
              <ParallelQueriesPage />
            </Route>
            <Route path='/rq-super-heroes/:heroId'>
              <RQSuperHeroPage />
            </Route>
            <Route path='/super-heroes'>
              <SuperHeroesPage />
            </Route>
            <Route path='/rq-super-heroes'>
              <RQSuperHeroesPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

//yarn server-json