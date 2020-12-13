import React, { createContext } from "react";

export const allSubjects = [
  {
    name: 'математика',
    icon: '♾️',
    id: 'math',
    available: true
  },
  {
    name: 'українська мова',
    icon: '💖',
    id: 'math',
    available: false
  },
  {
    name: 'українська література',
    icon: '📚',
    id: 'math',
    available: false
  },
  {
    name: 'історія України',
    icon: '📜',
    id: 'math',
    available: false
  },
  {
    name: 'фізика',
    icon: '🎡',
    id: 'math',
    available: false
  },
  {
    name: 'біологія',
    icon: '🧬',
    id: 'math',
    available: false
  },
  {
    name: 'географія',
    icon: '🌋',
    id: 'math',
    available: false
  },
  {
    name: 'англійська мова',
    icon: '🗽',
    id: 'math',
    available: false
  },
  {
    name: 'німецька мова',
    icon: '🎻',
    id: 'math',
    available: false
  },
  {
    name: 'французька мова',
    icon: '🥐',
    id: 'math',
    available: false
  }
];

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
