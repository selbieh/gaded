import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './advertiseDetailsMenueStylee'



export default function AdvertiseDetailsMenue(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography className={classes.heading}>   <span className={classes.Details}>Adertise Details</span></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >
       <span className={classes.Details}>Name</span>    {props.item.name}
          <br/>
          <span className={classes.Details}>Type</span>  {props.item.category}
          <br/>

          <span className={classes.Details}>Price</span>{props.item.price}
          <br/> <span className={classes.Details}>viewed </span>{props.item.number_of_viewer} times
          <br/>

          <span className={classes.Details}>Details</span> {props.item.details}
          <br/>
          <span className={classes.Details}>Approved by admin</span> {props.item.aprroved ?'yes':'NO'}
          <br/>

          <span className={classes.Details}>Since</span> {props.item.since}
          <br/>
          <span className={classes.Details}>Details</span> {props.item.details}
          <br/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><span className={classes.Details}>Seller contacts</span>  </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {props.item.contacts}
           <br/>
           <span className={classes.Details}>City</span>  {props.item.city}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
}