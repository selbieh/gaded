import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './advertiseDetailsMenueStylee';
import { Badge } from 'reactstrap';




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
       <Badge className={classes.badge} color="danger"> Name </Badge>  {props.item.name}
          <br/>
        <Badge className={classes.badge} color="danger"> Type </Badge> {props.item.category}
          <br/>

          <Badge className={classes.badge} color="danger"> Price </Badge>{props.item.price}
          <br/> <Badge className={classes.badge} color="danger"> Viewed </Badge>{props.item.number_of_viewer} times
          <br/>

          <Badge className={classes.badge} color="danger">   Details </Badge>{props.item.details}
          <br/>
          <Badge className={classes.badge} color="danger">   Approved By Admin </Badge> {props.item.aprroved ?'yes':'NO'}
          <br/>

          <Badge className={classes.badge} color="danger">  since </Badge>{props.item.since}
          <br/>
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