import Module from "./module";

class Program {

      constructor(program_json) {
        console.log("original program json", program_json)
        this.subject = "math";
        this.modules = []
        this.chapters = []
        this.topics = []

        // load modules
        for (var module_id = 0; module_id < Object.keys(program_json['modules']).length; module_id++) {
            let module_json = program_json['modules'][module_id]
            module = new Module(module_id, module_json)

            this.modules.push(module)
            for (var chapter of module.chapters) {
                this.chapters.push(chapter)
                for (var topic of chapter.topics) {
                    this.topics.push(topic)
                }
            }
        }

    }
}

export default Program
