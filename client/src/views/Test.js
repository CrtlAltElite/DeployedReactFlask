import React, {useContext} from 'react'
import {MyContext} from '../context/MyContext'
import Inner from '../components/Inner'

export default function Test() {
    const value = useContext(MyContext)

    return (
        <div>
            hey {value}
            <br/>
            <Inner/>
        </div>
    )
}
