class Topic {

    constructor(topic_json) {
      this.id = topic_json["id"]
      this.chapter_id = topic_json["chapter_id"]
      this.name = topic_json["name"]
      this.order_n = topic_json["order_n"]
      this.study_guide_link = topic_json["study_guide_link"]
      this.practice_link = topic_json["practice_link"]

      this.skills_reqs_dict = topic_json["skills_reqs"]
      this.skills_reqs_pro = topic_json["skills_reqs"]["pro"]
      this.skills_reqs_standard = topic_json["skills_reqs"]["standard"]

      this.prev_topic_dict = topic_json["prev_topic"]
      this.next_topic_dict = topic_json["next_topic"]
      this.next_topic_id = undefined
      this.next_topic_name = undefined
      this.prev_topic_id = undefined
      this.prev_topic_name = undefined

      try {
          this.next_topic_id = topic_json["next_topic"]["id"]
          this.next_topic_name = topic_json["next_topic"]["name"]
          this.prev_topic_id = topic_json["prev_topic"]["id"]
          this.prev_topic_name = topic_json["prev_topic"]["name"]

      } catch (e) {}

  }


}

export default Topic
