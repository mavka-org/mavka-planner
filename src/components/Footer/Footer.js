import React from 'react';
import { Grid, Typography, Box, Link, Card, CardContent } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { LargeButton } from '../Button/Button';

const useStyles = makeStyles({
  root: {
    width: '228px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: '20px',
    padding: '15px'
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
    width: '220px',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  },
})(LargeButton);

const Footer = props => {

  const classes = useStyles();

  return (

    <Box pt={5}>

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={8}
      >
        <Grid item alignItems="center" direction="column" spacing={3}>
            <Card className={classes.root}>
              <CardContent>
                <Grid container alignItems="center" direction="column" spacing={2}>
                  <Grid item><WhiteText className={classes.mb} align="center">Наша платформа лише у бета-версії. Якщо щось поламалось або у тебе є ідеї як її покращити — напиши нам, будь ласка.</WhiteText></Grid>
                  <Grid item><WhiteButton href="mailto:hello@mavka.org">Написати нам</WhiteButton></Grid>
                </Grid>
              </CardContent>
            </Card>
        </Grid>

        <Grid item>
          <Typography align="center"><b>Мавка</b> — це інноваційна неприбуткова освітня онлайн платформа з контентом, що дійсно підходить учням 21го сторіччя. Створюється з любов'ю ❤️
           </Typography>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={2}
          >
          <Grid item><Typography><Link href="https://mavka.org/">Про мавку</Link></Typography></Grid>
          <Grid item><Typography><Link href="https://t.me/mavkazno">Телеграм</Link></Typography></Grid>
          <Grid item><Typography><Link href="https://www.instagram.com/mavka.zno/">Інстаграм</Link></Typography></Grid>
          <Grid item><Typography><Link href="https://send.monobank.ua/jar/6LyzveDwkG">Підтримати</Link></Typography></Grid>
          <Grid item><Typography>hello@mavka.org</Typography></Grid>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Footer
