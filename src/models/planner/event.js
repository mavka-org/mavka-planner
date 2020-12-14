import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { LinkButton } from './../../components/Button/Button';
import Checkbox from '@material-ui/core/Checkbox';


class Event {
    constructor(idx, weekIdx, title, json){
        this.idx = idx
        this.weekIdx = weekIdx
        this.title = title
        this.completed = json['completed']
        this.type = json['type']
    }

    changeCompleted() {
        // changes this.completed to opposite value and returns it
        this.completed = !this.completed
        return this.completed
    }

    getComponent(handleCheckboxChange) {

      return (
        <Grid item container direction="row" spacing={1}>

          <Grid item container direction="row" wrap="nowrap" xs={9}>

            <Grid item>
              <Checkbox
                checked={this.completed}
                onChange={handleCheckboxChange}
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

    getButton() {
      return ''
    }
}


export class TopicEvent extends Event {
    constructor(idx, weekIdx, json){
      let chapter_n = json['data']['chapter_id'] + 1
      let topic_n = json['data']['order_n'] + 1
      let title = chapter_n + '.' + topic_n + ' ' + json['data']['topic_name']
      super(idx, weekIdx, title, json)
      this.topic_id = json['data']['topic_id']
    }

    getButton() {
      return (<LinkButton size="small" variant="contained">вчити</LinkButton>)
    }
}


export class UrlEvent extends Event {
    constructor(idx, weekIdx, json){
        super(idx, weekIdx, json['data']['title'], json)
        this.url = json['data']['url']
    }

    getButton() {
      return (<LinkButton variant="outlined">перейти</LinkButton>)
    }
}


export class TextEvent extends Event {
    constructor(idx, weekIdx, json){
        super(idx, weekIdx, json['data']['title'], json)
    }
}
