import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const DynamicParallelPage = ({ heroIds }) => {

    const queryResult = useQueries(
        useQueries(
            heroIds.map((id) => {
                return {
                    queryKey: ['super-hero', id],
                    queryFn: () => fetchSuperHero(id),
                }
            })
        )
    )

    console.log('queryResult', queryResult);

    return (<>
        <div>DynamicParallelPage</div>
        {
            queryResult.map(item => (<>
                <h3>{item.data}</h3>
                <h3>{item.status}</h3>
            </>))
        }
        <div>DynamicParallelPage</div>
    </>)
}