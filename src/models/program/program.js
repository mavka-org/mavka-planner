import Module from "./module";

class Program {

      constructor(program_json) {
        this.subject = "math";
        this.modules = []
        this.chapters = []
        this.topics = []

        // load modules

          for (let module_id in program_json['modules']) {

              let module_json = program_json['modules'][module_id]
              let module = new Module(module_id, module_json)

              this.modules.push(module)
              for (let chapter of module.chapters) {
                  this.chapters.push(chapter)
                  for (let topic of chapter.topics) {
                      this.topics.push(topic)
                  }
              }

          }

    }
}

export default Program
