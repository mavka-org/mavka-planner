import LandingHeader from './../../assets/img/LandingHeader.png';
import { LargeButton } from '../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
// import Demo from '../../assets/img/demo.gif'
import Demo from '../../assets/img/demo.gif'
import Box from '@material-ui/core/Box';
import InfoSection from '../../components/InfoSection/InfoSection';


const useStyles = makeStyles((theme) => ({
  Grid: {
    width: "100%",
    justifyContent: "center",
  },
  Img: {
    width: "250px",
  },
  oppositeColor: {
    backgroundColor: '#fff'
  },
  boxBorders: {
    boarderWidth: "10px",
  }
}));

const Landing = (props) => {
  const classes = useStyles();
  return (
      <Grid container spacing="2" className={classes.Grid}>

        <Grid item>
          <img src={LandingHeader} className={classes.Img} alt="mavka"/>
        </Grid>

        <Grid item>
          <Typography variant="h6" align="center">ЗНО не таке страшне, як здається. Ми допоможемо тобі!</Typography>
        </Grid>

        <Grid item container spacing="2">

          <Grid item style={{width: "100%"}}>
            <LargeButton
              href='planner'
              fullWidth
              variant="contained"
              color="primary"
            >
            📅  розпланувати підготовку
            </LargeButton>
          </Grid>

          <Grid item style={{width: "100%"}}>
            <LargeButton
              href='program'
              fullWidth
              variant="contained"
              className={classes.oppositeColor}
            >
            📚  вчити тести та матеріали
            </LargeButton>
          </Grid>

        </Grid>



        <div style={{ width: '100%' }}>
           <Box styles={{ "borderWidth": "10px"}} display="flex" justifyContent="center" p={4}>
             <Box className={classes.boxBorders}  width={7/10} >
               <img width="100%" src={Demo} />
             </Box>
           </Box>
         </div>

        {/*<Box item pt={2}>*/}
        {/*  <img src={Demo} alt="гарна гіфка" />*/}
        {/*</Box>*/}
        {/*<InfoSection />*/}


      </Grid>
  )
}

export default Landing
