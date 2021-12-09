import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

export const ParallelQueriesPage = () => {
    //alias
    const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
    const { data: friends } = useQuery('friends', fetchFriends)

    //console.log({superHeroes, friends});

    return (<>
        <div>ParallelQueriesPage</div>
        <h1>Super Heroes : </h1>
        {
            superHeroes.data?.map(item => (
                <p key={item.id}>{item.name}</p>
            ))
        }
        <h1>Friends : </h1>
        {
            friends.data?.map(item => (
                <p key={item.id}>{item.name}</p>
            ))
        }
    </>)
}