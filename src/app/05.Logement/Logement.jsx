import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { route } from '../../utils/route';

export default function Logement () {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('id'))

    return(<div>{searchParams.get('id')}</div>)
}