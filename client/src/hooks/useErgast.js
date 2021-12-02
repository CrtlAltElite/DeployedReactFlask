
import { useEffect, useState } from "react";
export default function useErgast(season, round){
    const [ergastData, setErgastData] = useState({})

    useEffect(
        ()=>{
            fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        .then(res=>res.json())
        .then(data=>{
            setErgastData({
                racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings,
                badRound: false,
                error:''
            }, ()=>console.log(this.state.racers))
        })
        .catch(error=>{setErgastData({racers:[],badRound:true, error:error})})
        }, [season, round]
    )
    return ergastData

}