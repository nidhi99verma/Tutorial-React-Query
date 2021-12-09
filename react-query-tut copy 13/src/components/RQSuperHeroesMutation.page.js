import React, { useState } from 'react';
import { useAddSuperHeroData, useSuperHeroesData } from '../hooks/useSuperHeroesData'
import { Link } from 'react-router-dom'

export const RQSuperHeroesMutationPage = () => {

    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

    const { mutate: addHero, isLoading: isLoadingMut, isError: isErrorMut, error: errorMut } = useAddSuperHeroData()

    const handleAddHeroClick = () => {
        const hero = { name, alterEgo }
        addHero(hero)
        //console.log({ name, alterEgo });
    }

    //console.log({ isLoading, isFetching });
    console.log({isLoadingMut, isErrorMut, errorMut});

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }

    // for mutation data
    // if (isLoadingMut) {
    //     return <h2>Loading...</h2>
    // }
    // if (isErrorMut) {
    //     return <h2>{errorMut.message}</h2>
    // }

    return (
        <>
            <h2>React Query Super Heroes Page :</h2>
            <div>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='text'
                    value={alterEgo}
                    onChange={e => setAlterEgo(e.target.value)}
                />
                <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
            <button onClick={refetch}>Fetch heroes</button>
            {data?.data.map(hero => {
                return (
                    <div key={hero.id}>
                        <Link to={`/rq-super-heroes/${hero.id}`}>
                            {hero.id} {hero.name}
                        </Link>
                    </div>
                )
            })}
        </>
    )
}
