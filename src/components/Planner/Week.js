import { Grid, Typography } from '@material-ui/core';
import { format } from "date-fns"
import { makeStyles } from '@material-ui/core/styles';
import { TopicEvent, UrlEvent, TextEvent } from "./Event";


const useStyles = makeStyles((theme) => ({
  DatesTitle: {
    textAlign: "right",
    fontWeight: "bold"
  },
  WeekTitleItem: {
    paddingBottom: theme.spacing(2)
  }
}));


const Week = (props) => {

  const classes = useStyles();

  const idx = props.idx
  const start_date = new Date(props.json.start_date + 'T00:00:00')
  const end_date = new Date(props.json.end_date + 'T23:59:59')
  const dates = format(start_date, 'dd.MM') + ' - ' + format(end_date, 'dd.MM')

  const event_types_classes = {
      'topic': TopicEvent,
      'url': UrlEvent,
      'text': TextEvent
  }

  const isPastWeek = () => {
      // returns true if the week ended before today
      return new Date() > end_date
  }

  const isFullyCompleted = () => {
      // returns true if every event of the week is completed
      for(var event of props.json.events) {
          if (event.completed === false) return false
      }
      return true
  }

  const getEventsComponents = () => {
    // return is no events to show:
    console.log(props.json)

    if (props.json.events.length === 0) {
      return (<Typography>Нічого показувати</Typography>)
    }

    return props.json.events.map((event_json, event_idx) => {

        let Event = event_types_classes[event_json.type]
        return (
          <Event idx={event_idx} json={event_json} />
        )
      })
  }


  return (

      <Grid item container>

        <Grid item container direction="row" alignItems="flex-end" className={classes.WeekTitleItem}>

          <Grid item xs={8}>
            <Typography variant="h1" textBold>тиждень {idx + 1}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography className={classes.DatesTitle}>
              {dates}
            </Typography>
          </Grid>

        </Grid>

        { getEventsComponents() }

      </Grid>
  )

}

export default Week
