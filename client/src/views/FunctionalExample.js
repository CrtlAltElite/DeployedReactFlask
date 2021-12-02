import React, {useState, useEffect} from 'react'
import useColorChanger from '../hooks/useColorChanger'

export default function FunctionalExample() {
    const [student, setStudent] = useState('No Student')
    const [numClicks, setNumClicks] = useState(0)


    useEffect(
        ()=>{
            console.log("We are in the first paramer of the useEffect Hook it is like componentDidMount/Update")
            return()=>{
                console.log('In the return of the first param of the useEffect hook like component did unmount')
            }
        }
    )
    
    // useEffect(
    //     ()=>{
    //         console.log('HELLLLLLOOOOOOOOOOOOO')
    //         switch(numClicks){
    //             case 0: setBgColor('cyan'); break;
    //             case 1: setBgColor('red'); break;
    //             case 2: setBgColor('green'); break;
    //             case 3: setBgColor('blue'); break;
    //             case 4: setBgColor('indigo'); break;
    //             case 5: setBgColor('violet'); break;
    //             default: setBgColor('gray');
    //             return ()=>{if (numClicks>=6){setNumClicks(0)}}
    //         }
    //     }, [numClicks]
    // )

    const bgColor = useColorChanger(numClicks,setNumClicks)

    return (
        <div>
            {console.log("in the render")}
            hello {student} <br/>
            <input type="text" name="name" onChange={(e)=>setStudent(e.target.value)} placeholder="Enter Student Name"/>
            <br/>
            <div style={{backgroundColor:bgColor, height:'250px'}}>
                <button onClick={()=>{setNumClicks(numClicks+1)}}>Click Me</button>
            </div>
        </div>
    )
}
