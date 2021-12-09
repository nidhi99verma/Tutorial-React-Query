import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error)
    }

    const {
        isLoading,
        data,
        isError,
        error,
        isFetching,
        refetch
    } = useQuery('super-herose', fetchSuperHeroes,
        {
            //cacheTime: cach data will stay only for 5000 mmsec
            //cacheTime: 5000,

            //staleTime: it will not fetch during 30 sec time frame(reduce no of api fetch)
            //staleTime: 30000      // default: 0sec

            //refetchOnMount: false then it will not fetch when u change page
            //refetchOnMount: false,  // default: true  //"always" : query will always refresh the data when the component mounts

            //refetchOnWindowFocus : ur ui is uptodate with remote data when user back to application
            //refetchOnWindowFocus: 'always', // default: true, it can be false

            //polling is process of fetching data in regular interval(it will fetch data in every 2 sec) with this use refetchIntervalInBackground enable true 
            // refetchInterval: 2000, // default: false 
            // refetchIntervalInBackground: true,

            //fetch data only on event()
            //enabled: false, //Disable data fetching

            onSuccess: onSuccess,
            onError: onError,
            //2
            //data filtering
            select: (data) => {
                const superHeroNames = data.data.map(hero => hero.name)
                return superHeroNames
            }
            
        }
    )

    //or

    // const { isLoading, data } = useQuery('super-herose', () => {
    //     return axios.get('http://localhost:4000/superheroes')
    // })

    //console.log({ isLoading, isFetching });

    if (isLoading || isFetching) {
        // if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            {/* <h2>Super Heroes Page</h2>
            {data?.data.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })} */}

            {/* <h2>Super Heroes Page</h2>
            <button onClick={refetch}>Fetch heroes</button>
            {data?.data.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })} */}

            {/* 2 */}
            <h2>Super Heroes Page</h2>
            {data?.map(heroName => {
                return <div key={heroName}>{heroName}</div>
            })}

        </>
    )
}
