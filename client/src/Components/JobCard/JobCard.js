import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Modal from "../Modal";

const JobCard = (props) => (
  <Card style={{
    width: "90%",  
    margin: "0 auto",
    marginTop: "5px",
    textAlign: "center",
    backgroundColor: "#fff"
  }}>
    <CardHeader
      title={props.title}
      titleStyle={{
        fontSize: '20px',
        margin: "0 auto"
      }}
      subtitle={props.company}
      actAsExpander={false}
      showExpandableButton={false}
    >
      <CardActions>
        <FlatButton label="Link" href={props.link} target="_blank"/>
        { props.job_id ?
          // <FlatButton label="Notes" onClick={props.saveJob} />
          <Modal job_id={props.job_id} />
          :
          <FlatButton label="Save Post" onClick={props.saveJob} /> 
        }
      </CardActions>
    </CardHeader>
  </Card>
);
export default JobCard;