import { format } from "date-fns"
import { TopicEvent, UrlEvent, TextEvent } from "./event";

class Week {
    constructor(id, json){
        this.id = id
        this.start_date = new Date(json['start_date'] + 'T00:00:00')
        this.end_date = new Date(json['end_date'] + 'T23:59:59')
        this.dates = format(this.start_date, 'dd.MM') + ' - ' + format(this.end_date, 'dd.MM')
        this.events = []

        let event_types_classes = {
            'topic': TopicEvent,
            'url': UrlEvent,
            'text': TextEvent
        }

        // load events
        for (var event_id = 0; event_id < json['events'].length; event_id++) {
            let event_json = json['events'][event_id]
            let Event = event_types_classes[event_json['type']]
            this.events.push(new Event(event_id, event_json))
        }
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
}

export default Week
