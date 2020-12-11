import React, { useEffect } from 'react'
import MuiLinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles';
import classes from './LoadingScreen.module.css'


export const LinearLoading = withStyles({
  root: {
  },
})(MuiLinearProgress);


const emojisMap = [
    '💪',
    '💡',
    '🍆',
    '🔥',
    '😍',
    '👾',
    '🐉'
];

const LoadingScreen = () => {

  const [time, setTimer] = React.useState(null)

  useEffect(() => {
     const interval = setInterval(() => {
        setTimer(new Date());
     }, 200);

     // This is important, you must clear your interval when component unmounts
     return () => clearInterval(interval);

  }, [])  // [] is for to execute `useEffect` only once as `componentWillMount`

   const randomInt = (min, max) => {
     let rand = min - 0.5 + Math.random() * (max - min + 1);
     return Math.round(rand);
   }

   const Emoji = () => {
     return (emojisMap[randomInt(0, emojisMap.length - 1)])
   }

   return (
     <div className={classes.page}>
         <div className={classes.loading}>
             <div className={classes.logo}><strong>мавка </strong>зно</div>
            <div style={{marginTop: '50px'}}>{Emoji()}</div>
         </div>
     </div>
   )
}

export default LoadingScreen
