class Program {

  constructor(json) {
    this.subject = "math";
    this.modules = []
    this.chapters = []
    this.topics = []


  }

}

class Module:
    def __init__(self, data, id):
        """Initiate the class structure from data"""
        self.id = id
        self.data = data
        self.chapters = []
        self.topics = []

        # generate chapters
        chapters_ids = self.data['chapters'].keys()
        for i in chapters_ids:
            c = Chapter(self.data['chapters'][i], i)
            self.chapters.append(c)
            self.topics += c.topics

    def json(self):
        return self.data

    def get_id(self):
        return self.id

    def get_name(self):
        return self.data['name']

    def __repr__(self):
        return '<Module {}: \'{}\'>'.format(self.get_id(), self.get_name())

let json = {
    "subject": "math",
    "year": 2020
}

console.log("hui");

let w = new Program(json);
console.log(w.json());
