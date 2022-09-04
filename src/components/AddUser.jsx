import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";







export const AddUser = ({ onAdd }) => {

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";

  };

  return (
    <div className='d-flex flex-column align-items-center'>
     <Form onSubmit={handleOnSubmit} style={{ width: '20rem', paddingTop: '2rem'}}>
           <Form.Group >
               <Form.Label>ADD USER</Form.Label>
               <Form.Control className="name-input" type="text" placeholder="name" name="name" />
               <Form.Control className="email-input" type="email" placeholder="email" name="email"/>
           </Form.Group>
           <Button onSubmit={handleOnSubmit} className="submit-button" value="submit" type='submit' style={{marginTop: '2rem'}}>Submit Form</Button>
       </Form>
    </div>
  );

};
