import Week from "./week";

class Planner {

  constructor(json) {
    this.weeks = []

    // load weeks
    for (var week_id = 0; week_id < json['weeks'].length; week_id++) {
        let week_json = json['weeks'][week_id]
        this.weeks.push(new Week(week_id, week_json))
    }

  }

}

export default Planner
