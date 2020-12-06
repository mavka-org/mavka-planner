import Week from "./../../components/Planner/week";

class Planner {

  constructor(json) {
    this.weeks = []

    // load weeks
    for (var week_idx = 0; week_idx < json['weeks'].length; week_idx++) {
        let week_json = json['weeks'][week_idx]
        this.weeks.push(new Week(week_idx, week_json))
    }

  }

}

export default Planner
