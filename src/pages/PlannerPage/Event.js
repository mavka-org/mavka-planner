import React from 'react'
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { LinkButton } from './../../components/Button/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { addAnalyticsEvent } from '../../services/API/httpRequests.js'
import { UserContext } from "../../providers/UserProvider";


class Event extends React.Component {

    //static user = UserContext

    constructor(props, title){
      super(props)
      this.id = props.json.event_id
      this.subject = props.subject
      this.idx = props.idx
      this.title = title
      this.type = props.json.type
      this.state = {
        completed: props.json.completed
      }
    }

    handleEventCompleted = (e) => {

      // changes this.completed to opposite value and returns it
      this.setState({ completed: !this.state.completed }, () => {
        this.props.handleEventCompleted(this.idx, this.id, this.state.completed);
      })
    }

    getButton() {
      return ''
    }

    render() {

      return (
        <Grid item container direction="row" spacing="1">

          <Grid item container direction="row" wrap="nowrap" xs={9}>

            <Grid item>
              <Checkbox
                checked={this.state.completed}
                onChange={this.handleEventCompleted}
                name={"checkbox-" + this.weekIdx + '-' + this.idx}
                color="secondary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>

            <Grid item>
              <Typography variant="subtitle1" style={{paddingTop: "9px"}}>{this.title}</Typography>
            </Grid>

          </Grid>

          <Grid container xs={3} direction='column' justify="center" alignItems="flex-end">

            { this.getButton() }

          </Grid>

        </Grid>
      )
    }

}
Event.contextType = UserContext;


export class TopicEvent extends Event {

    constructor(props){
      let chapter_n = props.json.data.chapter_id + 1
      let topic_n = props.json.data.order_n + 1
      let title = '📖 ' + chapter_n + '.' + topic_n + ' ' + props.json.data.topic_name
      super(props, title)
      this.topic_id = props.json.data.topic_id
    }

    getButton() {
        // href={"/math/topic/" + this.topic_id}
      return (<LinkButton onClick={(e)=>addAnalyticsEvent(this.context, "PlannerEventButtonClicked", {"subject_id":this.subject.id, "event_id":this.id})} size="small" variant="contained" href={"/math/topic/" + this.topic_id}>вчити</LinkButton>)
    }
}


export class UrlEvent extends Event {
    constructor(props){
      let title = props.json.data.title
      super(props, title)
      this.url = props.json.data.url
    }

    getButton() {
      return (
        <LinkButton onClick={(e)=>addAnalyticsEvent(this.context, "PlannerEventButtonClicked", {"subject_id":this.subject.name, "event_id":this.id})} variant="outlined" href={this.url}>перейти</LinkButton>
      )
    }
}


export class TextEvent extends Event {
    constructor(props){
      let title = props.json.data.title
      super(props, title)
    }
}
