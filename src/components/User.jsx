import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const User = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
       <div className='d-flex flex-column align-items-center'>
       <Form onSubmit={handleOnEditSubmit} style={{ width: '20rem', paddingTop: '2rem'}}>
             <Form.Group>
                 <Form.Label>ADD USER</Form.Label>
                 <Form.Control className="name-input" type="text" placeholder="name" name="name" />
                 <Form.Control className="email-input" type="email" placeholder="email" name="email"/>
             </Form.Group>
             <Button onSubmit={handleOnEditSubmit} className="submit-button" value="submit" type='submit' style={{marginTop: '2rem'}}>Submit Form</Button>
         </Form>
      </div>
      ) : (
        <div className='user d-flex align-items-center'>
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
          <div className="btn-group">
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      )}
    </div>
  );
};


