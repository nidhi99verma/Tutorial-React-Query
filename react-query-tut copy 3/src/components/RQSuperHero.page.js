import React from 'react'
import { useSuperHeroData } from '../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'

export default function RQSuperHeroPage() {

    const { heroId } = useParams()
    const  {isLoading, data, isError, error} = useSuperHeroData(heroId)

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <div>Hero Name: {data?.data.name}</div>
            <div>Alter Ego: {data?.data.alterEgo}</div>
        </div>
    )
}
