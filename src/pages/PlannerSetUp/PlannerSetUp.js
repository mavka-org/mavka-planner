import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChooseTopic from './../../assets/img/choose-topics.png';
import { Grid, Typography } from '@material-ui/core';
import Page from '../../components/Page/Page';
import DropDown from '../../components/DropDown/DropDown';
import { LargeButton } from '../../components/Button/Button';
import HeaderImage from '../../components/HeaderImage/HeaderImage';


const useStyles = makeStyles((theme) => ({
    Grid: {
        width: "100%",
        justifyContent: "center",
    },
    Img: {
        width: "250px",
    },
    dropDown: {
        width: '100%'
    },
    noPadding: {
        padding: 0,
    }
}));

const ChooseTopics = () => {
    const classes = useStyles()
    return (

        <Page>
            <Grid container direction="column" alignItems="left"  className={classes.Grid}>
                <div style={{height:24}}></div>
                <Grid item>
                    <HeaderImage src={ChooseTopic} alt={'Вибрати тему'}/>
                </Grid>
                <div style={{height:36}}></div>
                <Grid item >
                    <Typography variant="body1" align="left">вибери теми, які ти вже знаєш, щоб ми не додавали їх до твого плану навчання</Typography>
                </Grid>
                <div style={{height:24}}></div>
                <Grid item >
                    <DropDown />
                </Grid>
                <div style={{height:24}}></div>
                <Grid item >
                    <LargeButton
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        📅  розпланувати підготовку
                    </LargeButton>
                </Grid>
            </Grid>
        </Page>


    )
}


export default ChooseTopics
