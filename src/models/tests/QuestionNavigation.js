import React, { useContext, useReducer, useEffect} from "react";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import s from '../../pages/PracticeTestPage/PracticeTestPage.module.css'


export default class QuestionNavigation extends React.Component {
// function QuestionNavigation(props) {

    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    
    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    // useStyles = makeStyles((theme) => ({
    //     root: {
    //         width: '415px',
    //         margin: '0 auto',
    //     },
    // }));



    // classes = useStyles()

    getNavBar = () => {
        // TODO front
        return this.props.questionDatas.map((questionData, idx) => {

            // стилизовать тут
            if (questionData.is_submitted) {
                if (questionData.is_correct) {
                    return <button 
                    className={s.correctButton} 
                    onClick={() => this.setState({open: false}, this.props.setCurrentQuestionIdx(idx))}>
                    {questionData.data.order_id}
                    </button>
                }
                else {
                    return <button 
                    className={s.incorrectButton} 
                    onClick={() => this.setState({open: false}, this.props.setCurrentQuestionIdx(idx))}>
                    {questionData.data.order_id}
                    </button>
                }
            }
            else {
                if (questionData.user_answer_started) {
                    return <button 
                    className={s.answeredButton} 
                    onClick={() => this.setState({open: false}, this.props.setCurrentQuestionIdx(idx))}>
                    {questionData.data.order_id} 
                    </button>
                }
                else {
                    return <button 
                    className={s.normalButton} 
                    onClick={() => this.setState({open: false}, this.props.setCurrentQuestionIdx(idx))}>
                    {questionData.data.order_id}
                    </button>
                }
            }
        })
    }


    render() {

        return (

            <div>
    
                <Grid item container direction="row" justify="flex-end" style={{ width: 'inherit' }}>
                    <IconButton onClick={this.handleClickOpen}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                </Grid>
    
    
    
                <Dialog
                    PaperProps={{
                    style: { borderRadius: '28px' }
                    }}
                    maxWidth="xs"
                    // className={classes.root}
                    // paper={classes.paper}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{"вибери тест:"}</DialogTitle>
                    <DialogContent>
    
                        <Grid container direction="row" justify="flex-start" >
                            {this.getNavBar()}
                            </Grid>
                        </DialogContent>
    
                </Dialog>
    
            </div>    
    
        )

    }
    
}
