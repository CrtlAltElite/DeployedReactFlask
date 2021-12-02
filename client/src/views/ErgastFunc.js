import React, { useState } from 'react';
import * as Yup from 'yup';
import {Formik, Field, Form} from 'formik';
import Table from 'react-bootstrap/Table';
import useErgast from '../hooks/useErgast';

const formSchema = Yup.object().shape({
    "season": Yup.number().typeError('You must specify a number').integer('Whole Number Please')
                .moreThan(1949, "Enter a year 1950 or later").lessThan(2022,"Enter a year 2021 or before")
                .required("Required"),

    "round": Yup.number().typeError("You must specify a number").integer("Whole Number Please")
            .min(1, "Round number must be 1-20").max(20,"Round number must be 1-20").required("Required")
})

const initialValues = {
    season: '',
    round:''
}

export default function ErgastFunc(){
    const[season, setSeason]=useState('')
    const [round, setRound] = useState('')

    const ergastData = useErgast(season, round)

    
    return (
        <div>
            <h1>Search F1 Racing Results</h1>
            {ergastData.badRound ? <small style={{color:"red"}}>Invalid Year Round Combo</small>:""}
            <Formik initialValues={initialValues}
                    validationSchema={formSchema}
                    onSubmit={
                        (values, {resetForm})=>{
                            setSeason(values.season);
                            setRound(values.round);
                            resetForm(initialValues);
                        }
                    }
                    >
                    {
                        ({errors, touched})=>(
                            <Form>
                                <label htmlFor="season" className="form-label">Season</label>
                                <Field name="season" className="form-control" />
                                {errors.season && touched.season ? (<div style={{color:'red'}}>{errors.season}</div>):null}

                                <label htmlFor="round" className="form-label">Round</label>
                                <Field name="round" className="form-control" />
                                {errors.round && touched.round ? (<div style={{color:'red'}}>{errors.round}</div>):null}
                                
                                <button type="submit" className="btn btn-primary">Search</button>

                            </Form>
                        )
                    }

            </Formik>

            {/* racer table starts here */}
            {ergastData.racers?.length > 0  ?
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Position</th>
                        <th>Points</th>
                        <th>Wins</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Nationality</th>
                        <th>Constructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ergastData.racers.map(
                            racer => (
                                <tr key={racer.position}>
                                    <td>{racer.position}</td>
                                    <td>{racer.points}</td>
                                    <td>{racer.wins}</td>
                                    <td><a target="_blank" rel="noreferrer" href={racer.Driver.url}>{racer.Driver.givenName} {racer.Driver.familyName}</a></td>
                                    <td>{racer.Driver.dateOfBirth}</td>
                                    <td>{racer.Driver.nationality}</td>
                                    <td><a target="_blank" rel="noreferrer" href={racer.Constructors[0].url}>{racer.Constructors[0].name}</a></td>
                                </tr>
                            )
                        )
                        
                        }
                    </tbody>
                </Table>
            :''}

        </div>
    )

}
