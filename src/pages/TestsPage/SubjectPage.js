import React, { useContext, useEffect, useState } from 'react'
import AppPage from "../../components/AppPage/AppPage";
import { Typography, Button, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { allSubjects } from '../../providers/SubjectProvider'
import Loading from './../../components/Loading/Loading';
import { getTestsLists } from './../../services/API/httpRequests';


const SubjectPage = (props) => {

    const { id } = useParams()
    let currentSubject = {}
    for (let subject of allSubjects) {
        if (subject.id === id) {
            currentSubject = subject
            break
        }
    }

    const [testsLists, setTestsLists] = React.useState(undefined);

    if (testsLists === undefined) {
        getTestsLists(id).then((testsListsResponse) => {
            setTestsLists(testsListsResponse.by_sessions.years)
        })
    }

    console.log(testsLists)

    return (
        testsLists ?
            <AppPage
                selected="tests"
                showStrategy={false}
                showChooseSubject={false}
                showImage={false}
                {...props}
            >
                <Grid>{currentSubject.name}</Grid>
                <Grid container direction="column" alignContent="center">
                    {
                        Object.entries(testsLists).map(([keyTest, test]) => {
                            return (
                                Object.entries(test.sessions).map(([keySession, session]) => {
                                    return (
                                        <Grid item key={keySession}>
                                            <Button>
                                                <Typography>{`${test.year}, ${session.session}`}</Typography>
                                            </Button>
                                        </Grid>
                                    )
                                })
                            )
                        })
                    }
                </Grid>
            </AppPage>
            :
            <Loading />
    )
}

export default SubjectPage