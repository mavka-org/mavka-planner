class Event {
    constructor(id, title, json){
        this.id = id
        this.title = title
        this.completed = json['completed']
        this.type = json['type']
    }

    change_completed() {
        // changes this.completed to opposite value and returns it
        this.completed = !this.completed
        return this.completed
    }
}


export class TopicEvent extends Event {
    constructor(id, json){
        let chapter_n = json['data']['chapter_id'] + 1
        let topic_n = json['data']['order_n'] + 1
        let title = chapter_n + '.' + topic_n + ' ' + json['data']['topic_name']
        super(id, title, json)
        this.topic_id = json['data']['topic_id']
    }
}


export class UrlEvent extends Event {
    constructor(id, json){
        super(id, json['data']['title'], json)
        this.url = json['data']['url']
    }
}


export class TextEvent extends Event {
    constructor(id, json){
        super(id, json['data']['title'], json)
    }
}
