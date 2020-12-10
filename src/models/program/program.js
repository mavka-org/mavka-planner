import Module from "./module";

class Program {

      constructor(program_json) {
        console.log("original program json", program_json)
        this.subject = "math";
        this.modules = []
        this.chapters = []
        this.topics = []

        // load modules
        //   console.log("program_json['modules'] ", program_json['modules'])
        //   console.log("Object.keys(program_json['modules']).length ", Object.keys(program_json['modules']).length)
        // for (var module_id = 0; module_id < Object.keys(program_json['modules']).length; module_id++) {
        //     let module_json = program_json['modules'][module_id]
        //     module = new Module(module_id, module_json)
        //
        //     this.modules.push(module)
        //     for (var chapter of module.chapters) {
        //         this.chapters.push(chapter)
        //         for (var topic of chapter.topics) {
        //             this.topics.push(topic)
        //         }
        //     }
        // }

          for (let module_id in program_json['modules']) {
              let module_json = program_json['modules'][module_id]
              module = new Module(module_id, module_json)
              console.log("module ", module_id, " ", module)

              this.modules.push(module)
              for (let chapter of module.chapters) {
                  this.chapters.push(chapter)
                  for (let topic of chapter.topics) {
                      this.topics.push(topic)
                  }
              }

              //
              // console.log(k + ' is ' + fruits[k])
          }

    }
}

export default Program
