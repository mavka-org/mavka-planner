import React, { createContext } from "react";

export const allSubjects = [
  {
    name: 'математика',
    icon: '♾️',
    id: 'math',
    available: true,
    testsAvailable: true,
  },
  {
    name: 'українська мова',
    icon: '💖',
    id: 'math',
    available: false,
    testsAvailable: true,
  },
  {
    name: 'українська література',
    icon: '📚',
    id: 'math',
    available: false,
    testsAvailable: true,
  },
  {
    name: 'історія України',
    icon: '📜',
    id: 'math',
    available: false,
    testsAvailable: true,
  },
  {
    name: 'фізика',
    icon: '🎡',
    id: 'math',
    available: false,
    testsAvailable: true,
  },
  {
    name: 'біологія',
    icon: '🧬',
    id: 'math',
    available: false,
    testsAvailable: true,
  },
  {
    name: 'географія',
    icon: '🌋',
    id: 'math',
    available: false,
    testsAvailable: true,
  },
  {
    name: 'англійська мова',
    icon: '🗽',
    id: 'math',
    available: false,
    testsAvailable: true,
  },
  {
    name: 'німецька мова',
    icon: '🎻',
    id: 'math',
    available: false,
    testsAvailable: true,
  },
  {
    name: 'французька мова',
    icon: '🥐',
    id: 'math',
    available: false,
    testsAvailable: true,
  }
];

class Subject {
  constructor(name, icon, id, programAvailable, plannerAvailable, testsAvailable) {
    this.name = name
    this.icon = icon
    this.id = id
    this.programAvailable = programAvailable
    this.plannerAvailable = plannerAvailable
    this.testsAvailable = testsAvailable
  }

  isAvailable(purpose) {
    if (purpose == "planner") {
      return this.plannerAvailable
    } else if (purpose == "program") {
      return this.programAvailable
    } else if (purpose == "tests") {
      return this.programAvailable
    } else {
      console.log("Couldn't understand if the subject is available for purpose " + purpose)
      return false
    }
  }

  }


export const SubjectContext = React.createContext([undefined, () => {}]);


const SubjectProvider = (props) => {

    const subject = React.useState(allSubjects[0])

    return (
        <SubjectContext.Provider value={subject}>
            {props.children}
        </SubjectContext.Provider>
    );
}

export default SubjectProvider;
