import React from 'react'
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { LinkButton } from './../../components/Button/Button';
import Checkbox from '@material-ui/core/Checkbox';


class Event extends React.Component {

    constructor(props, title){
      super(props)
      this.idx = props.idx
      this.title = title
      this.type = props.json['type']
      this.state = {
        completed: props.json['completed']
      }
    }

    toggleCompleted = () => {
        // changes this.completed to opposite value and returns it
        this.setState({
            completed: !this.state.completed
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
                onChange={this.toggleCompleted}
                name={"checkbox-" + this.weekIdx + '-' + this.idx}
                color="secondary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>

            <Grid item>
              <Typography style={{paddingTop: "9px"}}>{this.title}</Typography>
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
      let title = chapter_n + '.' + topic_n + ' ' + props.json.data.topic_name
      super(props, title)
      this.topic_id = props.json.data.topic_id
    }

    getButton() {
      return (<LinkButton size="small" variant="contained" href={"/math/topic/" + this.topic_id}>вчити</LinkButton>)
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
        <LinkButton variant="outlined" href={this.url}>перейти</LinkButton>
      )
    }
}


export class TextEvent extends Event {
    constructor(props){
      let title = props.json.data.title
      super(props, title)
    }
}
