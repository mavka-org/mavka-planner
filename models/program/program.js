class Program {

  constructor(json) {
    this.subject = "math";
    this.modules = []
    this.chapters = []
    this.topics = []


  }

}

let json = {
    "subject": "math",
    "year": 2020
}

console.log("hui");

let w = new Program(json);
console.log(w.json());
