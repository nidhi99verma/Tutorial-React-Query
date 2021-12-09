import React from 'react';
import {useSuperHeroData} from '../hooks/useSuperHeroData'

export const RQSuperHeroesPage = () => {

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroData(onSuccess, onError)

    console.log({ isLoading, isFetching });

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>Super Heroes Page</h2>
            {data?.map(heroName => {
                return <div key={heroName}>{heroName}</div>
            })}

        </>
    )
}
