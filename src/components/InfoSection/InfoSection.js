import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { LargeButton } from '../Button/Button';
const useStyles = makeStyles({
  root: {
    width: 275,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: '20px'
  },
  mb: {
    marginBottom: 12,
  },
});
const WhiteText = withStyles({
  root: {
    color: 'white'
  },
})(Typography);
const WhiteButton = withStyles({
  root: {
    backgroundColor: "white",
    color: 'black',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  },
})(LargeButton);
const InfoSection = props => {
  const classes = useStyles();
  return (
    <ThemeProvider>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} container alignItems="center" direction="column">
          <Grid item>
            <Card className={classes.root}>
              <CardContent>
                <Grid container alignItems="center" direction="column">
                  <Grid item><WhiteText className={classes.mb}>Вибачте, але ми досі у бетці. Якщо є ідеї або проблеми &mdash; пишіть</WhiteText></Grid>
                  <Grid item><WhiteButton href="#">Зв'язатися з нами</WhiteButton></Grid>
                </Grid>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12}><Typography variant="body1"><Link href="https://mavka.org/">Про мавку</Link></Typography></Grid>
        <Grid item xs={12}><Typography variant="body1"><Link href="https://t.me/mavkazno">Телеграм</Link></Typography></Grid>
        <Grid item xs={12}><Typography variant="body1"><Link href="https://www.instagram.com/mavka.zno/">Інстаграм</Link></Typography></Grid>
        <Grid item xs={12}><Typography variant="h1">мавка</Typography></Grid>
        <Grid item><Typography variant="body1" align="center">Інноваційна неприбуткова освітня онлайн платформа з контентом, що дійсно підходить учням 21го сторіччя. Створюється з любов'ю
           </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default InfoSection