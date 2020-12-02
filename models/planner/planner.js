import Week from "./week.js";

class Planner {

  constructor(json) {
    this.weeks = []

    // load weeks
    for (var week_json in json['weeks']) {
        this.weeks.push(new Week(week_json))
    }
  }

}

let json = {
    "weeks": {
        "1": {},
        "2": {}
    }
}

let w = new Planner(json);
console.log(w.weeks[0].status);

export default Planner
