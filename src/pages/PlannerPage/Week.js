import React, { useContext } from 'react';
import { UserContext } from './../../providers/UserProvider';
import { SubjectContext } from './../../providers/SubjectProvider';
import { Grid, Typography } from '@material-ui/core';
import { format } from "date-fns"
import { makeStyles } from '@material-ui/core/styles';
import { TopicEvent, UrlEvent, TextEvent } from "./Event";
import { updateUserPlanner } from './../../services/API/httpRequests';
import { addAnalyticsEvent } from "../../services/API/httpRequests";
import { WeekConfetti } from './../../components/Confetti/Confetti';
import { TrackingContext } from '@vrbo/react-event-tracking'


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

  const user = useContext(UserContext)
  const subject = useContext(SubjectContext)[0]

  const idx = props.idx
  const start_date = new Date(props.json.start_date + 'T00:00:00')
  const end_date = new Date(props.json.end_date + 'T23:59:59')
  const dates = format(start_date, 'dd.MM') + ' - ' + format(end_date, 'dd.MM')

  const [isConfettiActive, setIsConfettiActive] = React.useState(false)

  const [eventsCompleted, setEventsCompleted] = React.useState( function() {
    //retrieve completed values of the events and set them as a state
    let eventsCompleted = []

    for(var event of props.json.events) {
        eventsCompleted.push(event.completed)
    }
    return eventsCompleted
  } ());

  const handleEventCompleted = (eventIdx, eventId, state) => {
    // Update eventsCompleted state with a new value

    if (state) {
      window.gtag('event', 'planner_event_checkbox_click', {
        'category' : 'planner_page_action',
        'subject_id' : subject.id,
        'event_id' : eventId,
        'week_tense' : getWeekTense(),
      })
    }

    let newEventsCompleted = [...eventsCompleted]
    newEventsCompleted[eventIdx] = state
    setEventsCompleted(newEventsCompleted)

    setIsConfettiActive(isFullyCompleted(newEventsCompleted))

    // update the state in the database
    let changes = {
      'week_n': idx,
      'event_n': eventIdx,
      'completed': state
    }

    let response = updateUserPlanner(user, subject.id, changes)
  }

  const event_types_classes = {
      'topic': TopicEvent,
      'url': UrlEvent,
      'text': TextEvent
  }


  const isCurrentWeek = () => {
    // returns true if today is in between the start date and end date of the week
    let now = new Date()
    return start_date < now && now < end_date
  }

  const isPastWeek = () => {
      // returns true if the week ended before today
      return new Date() > end_date
  }

  const getWeekTense = () => {
    if (isCurrentWeek()) { return "current"}
    if (isPastWeek()) { return "past"}
    return "future"
  }


  const isFullyCompleted = (events) => {
      // returns true if every event of the week is completed
      for(var event of events) {
          if (event === false) return false
      }
      return true
  }

  const getWeekSubtitle = () => {
    if (isFullyCompleted(eventsCompleted)) {
      return (<Typography variant="body2" component="span">· виконано</Typography>)
    }
    if (isCurrentWeek()) {
      return (<Typography variant="body2" color="secondary" component="span">· ти тут</Typography>)
    }
    if (isPastWeek()) {
      if (!isFullyCompleted(eventsCompleted)) {
        return (<Typography variant="body2" color="error" component="span">· не все виконано</Typography>)
      }
    }
  }

  const getEventsComponents = () => {
    // return is no events to show

    if (props.json.events.length === 0) {
      return (<Typography>Тут поки що нічого! Відпочивай ✨</Typography>)
    }

    return props.json.events.map((event_json, event_idx) => {

        let Event = event_types_classes[event_json.type]
        return (
          <Event subject={subject} idx={event_idx} weekIdx={idx} json={event_json} handleEventCompleted={handleEventCompleted}/>
        )
      })
  }

  // <WeekConfetti active={isConfettiActive}/>

  return (

    <Grid item container style={{justifyContent: "center"}}>

        <WeekConfetti active={isConfettiActive}/>

        <Grid item container direction="row" alignItems="flex-end" className={classes.WeekTitleItem}>

          <Grid item xs={8}>
            <Typography variant="h1">тиждень {idx + 1}</Typography>
            { getWeekSubtitle() }
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body2" className={classes.DatesTitle}>
              {dates}
            </Typography>
          </Grid>

        </Grid>

        { getEventsComponents() }

      </Grid>
  )

}

export default Week
