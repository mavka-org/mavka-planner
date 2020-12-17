import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, Link, Card, CardContent } from '@material-ui/core';
import { LargeButton } from '../../components/Button/Button';

const useStyles = makeStyles( (theme) => ({
  root: {
    display: 'flex',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '20px',
    padding: '15px'
  },
  mb: {
    marginBottom: 12,
  },
}));

const WhiteText = withStyles({
  root: {
    color: 'white'
  },
})(Typography);

const WhiteButton = withStyles( (theme) => ({
  root: {
  backgroundColor: "white",
  color: 'black',
  borderRadius: '10px',
  width: '220px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
},
}))(LargeButton);

const Footer = props => {

  const classes = useStyles();

  return (

    <Box
      pt={4}
      alignItems="center"
      justifyContent="center"
    >
        <Box justifyContent="center" pb={6}>
            <Card className={classes.root}>
              <CardContent>
                <Grid container alignItems="center" direction="column" spacing={2}>

                  <Grid item>
                    <WhiteText variant="h3" className={classes.mb} align="center" paragraph><strong>🌱 Ми зростаємо разом з вами!</strong></WhiteText>
                    <WhiteText align="center">Мавка лише у бета-версії. Якщо у тебе є ідеї як її покращитищось, ти хочеш допомогти команді або щось поламалось — не зволікай, будь ласка, і пиши нам.</WhiteText>
                  </Grid>

                  <Grid item><WhiteButton href="https://t.me/tonia_zakorchemna">Написати нам</WhiteButton></Grid>

                </Grid>
              </CardContent>
            </Card>
        </Box>

        <Box pb={6}>
          <Typography align="center"><b>Мавка</b> — це інноваційна неприбуткова освітня онлайн платформа з контентом, що дійсно підходить учням 21го сторіччя. Створюється з любов'ю ❤️
          </Typography>
        </Box>

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

    </Box>
  )
}

export default Footer
