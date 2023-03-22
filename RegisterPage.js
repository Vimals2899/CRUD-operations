import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

function RegisterPage(){
    const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }
    return(
        <>
            <div className="justify-content-center" style={{marginLeft:"400px"}}>
                <h1>Register Form</h1>
              </div>
            <div className="justify-content-center" style={{marginLeft:"400px",marginRight:"400px"}}>
            

                <Form onSubmit={handleSubmit}>

                <Form.Group size="lg" controlId="email">

                    <Form.Label>Email</Form.Label>

                    <Form.Control

                    autoFocus

                    type="email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                    />

                </Form.Group>

                <Form.Group size="lg" controlId="password">

                    <Form.Label>Password</Form.Label>

                    <Form.Control

                    type="password"

                    value={password}

                    onChange={(e) => setPassword(e.target.value)}

                    />

                </Form.Group>

                <Form.Group size="lg" controlId="confirm password">

                    <Form.Label>Conform Password</Form.Label>

                    <Form.Control

                    type="confirm password"

                    value={password}

                    onChange={(e) => setPassword(e.target.value)}

                    />

                </Form.Group> <br />

                <Button block size="lg" type="submit" disabled={!validateForm()}>

                    Register

                </Button>

                </Form>

            </div>
        </>
    )
}

export default RegisterPage;