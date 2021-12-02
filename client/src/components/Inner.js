import React, {useContext} from 'react'
import {MyContext} from '../context/MyContext'

export default function Inner() {

    const value = useContext(MyContext)

    return (
        <div>
         this inncer comp {value}   
        </div>
    )
}
