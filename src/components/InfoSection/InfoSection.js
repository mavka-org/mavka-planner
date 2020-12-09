import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { LargeButton } from '../Button/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
const InfoSection = props => {
  return (
    <React.Fragment>
      <Container fluid>
        <Grid container spacing='2'>
          <Grid item xs={12}>
            <Grid container spacing="1">
              <Grid item><Typography variant={'h1'}>мавка</Typography></Grid>
              <Grid item><Typography variant={'body1'}>Інноваційна неприбуткова освітня онлайн платформа з контентом, що дійсно підходить учням 21го сторіччя. Створюється з любов'ю</Typography></Grid>
              <Grid item><Typography variant={'body1'}>Інноваційна неприбуткова освітня онлайн платформа з контентом, що дійсно підходить учням 21го сторіччя. Створюється з любов'ю</Typography><Typography variant={'body1'}>©ГО «Мавка», 2020. При використанні матеріалів сайту, зворотнє посилання обов'язкове. Використані тестові завдання належать Українському центру оцінювання якості освіти.</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing="2">
              <Grid item xs={12}>
                <Typography variant={'h1'}>Контакти</Typography>
              </Grid>
              <Grid item xs={12}>
                <LargeButton fullWidth href="https://www.instagram.com/mavka.zno/?hl=ru">
                  <IconButton disabled>
                    <SvgIcon>
                      <linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"><stop offset="0" stop-color="#fd5" /><stop offset=".5" stop-color="#ff543e" /><stop offset="1" stop-color="#c837ab" /></linearGradient><path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z" fill="url(#SVGID_1_)" /><path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff" />
                    </SvgIcon>
                  </IconButton>
                    Інстаграм
                  </LargeButton>
              </Grid>
              <Grid item xs={12}>
                <LargeButton fullWidth href="https://t.me/mavkazno">
                  <IconButton disabled>
                    <SvgIcon>
                      <circle cx="12" cy="12" fill="#039be5" r="12" /><path d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="#fff" />
                    </SvgIcon>
                  </IconButton>
                Телеграм
              </LargeButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default InfoSection