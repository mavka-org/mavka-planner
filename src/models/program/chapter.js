import Topic from "./topic";

class Chapter {

    constructor(chapter_id, chapter_json) {
      this.id = chapter_id
      this.name = chapter_json["name"]
      this.topics = []

      // load topics
      for (var topic_id of Object.keys(chapter_json['topics'])) {
          let topic_json = chapter_json['topics'][topic_id]
          this.topics.push(new Topic(topic_json))
      }

  }


}

export default Chapter
