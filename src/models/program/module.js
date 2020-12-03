import Chapter from "./chapter";

class Module {

    constructor(module_id, module_json) {
      this.id = module_id
      this.name = module_json["name"]
      this.chapters = []

      // load chapters
      for (var chapter_id of Object.keys(module_json['chapters'])) {
          let chapter_json = module_json['chapters'][chapter_id]
          this.chapters.push(new Chapter(chapter_id, chapter_json))
      }

  }

}

export default Module
