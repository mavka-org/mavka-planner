import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { LinkButton } from './../../components/Button/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {TrackingContext} from '@vrbo/react-event-tracking'
import {SubjectContext} from "../../providers/SubjectProvider";


class Event extends React.Component {

    static contextType = SubjectContext;

    constructor(props, title){
      super(props)
      this.id = props.json.event_id
      this.subject = props.subject
      this.idx = props.idx
      this.weekIdx = props.weekIdx
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

    handleButtonClick = (topic_id) => {
        //this.context.trigger("PlannerEventButtonClicked", {"event_id":this.id}, options)
        // ріал костиль, бо для int_redirect треба контекст історії, а в класі можна використовувати лише один контекст (вже є трігер)
        //this.context.trigger("PlannerEventButtonClicked", {"event_id":this.id}, options)
        window.gtag('event', 'planner_page_action', {
            'action': 'event_button_click',
            'subject_id' : this.context.id,
            'topic_id' : topic_id,
        });
    }


    getButton() {
      return ''
    }

    render() {

      return (
        <Grid item container direction="row" spacing={1}>

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


export class TopicEvent extends Event {

    constructor(props){
      let chapter_n = props.json.data.chapter_id + 1
      let topic_n = props.json.data.order_n + 1
      let title = '📖 ' + chapter_n + '.' + topic_n + ' ' + props.json.data.topic_name
      super(props, title)
      this.topic_id = props.json.data.topic_id
    }

    getButton() {
      return (<LinkButton
          href={"/math/topic/" + this.topic_id}
          name={this.id + 'Button'}
          //onClick={(e)=>this.handleButtonClick()}
          //onClick={(e)=>this.handleButtonClick({"ext_redirect": {"href":("/math/topic/" + this.topic_id)}})}
          onClick = { () => this.handleButtonClick(this.topic_id) }
          size="small"
          variant="contained"
      >вчити
      </LinkButton>)
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
        <LinkButton
            name={this.id + 'Button'}
            //href={this.url}
            onClick={(e)=>this.handleButtonClick({"ext_redirect": {"href":this.url}})}
            //onClick={(e)=>this.handleButtonClick()}
            variant="outlined"
        >перейти
        </LinkButton>
      )
    }
}


export class TextEvent extends Event {
    constructor(props){
      let title = props.json.data.title
      super(props, title)
    }
}
