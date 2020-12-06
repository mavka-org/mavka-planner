import { Grid, Typography } from '@material-ui/core';
import { format } from "date-fns"
import { TopicEvent, UrlEvent, TextEvent } from "./event";

class Week {
    constructor(idx, json){
        this.idx = idx
        this.start_date = new Date(json['start_date'] + 'T00:00:00')
        this.end_date = new Date(json['end_date'] + 'T23:59:59')
        this.dates = format(this.start_date, 'dd.MM') + ' - ' + format(this.end_date, 'dd.MM')
        this.events = []
        this.json = json // DELETE

        let event_types_classes = {
            'topic': TopicEvent,
            'url': UrlEvent,
            'text': TextEvent
        }

        // load events
        // for (var event_idx = 0; event_idx < json['events'].length; event_idx++) {
        //     let event_json = json['events'][event_idx]
        //     let Event = event_types_classes[event_json['type']]
        //     this.events.push(new Event(event_idx, this.idx, event_json))
        // }
    }

    is_past_week() {
        // returns true if the week ended before today
        return new Date() > this.end_date
    }

    is_fully_completed() {
        // returns true if every event of the week is completed
        for(var event of this.events) {
            if (event.completed === false) return false
        }
        return true
    }

    getComponent(handleCheckboxChange, classes) {
      return (

          <Grid item container>

            <Grid item container direction="row" alignItems="flex-end" className={classes.WeekTitleItem}>

              <Grid item xs={8}>
                <Typography variant="h4" textBold>тиждень {this.idx + 1}</Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography className={classes.DatesTitle}>
                  {this.dates}
                </Typography>
              </Grid>

            </Grid>

            {this.events.map((event) => { return event.getComponent(handleCheckboxChange) } )}
            <TopicEvent idx={0} weekIdx={0} />

          </Grid>
      )
    }
}

export default Week
