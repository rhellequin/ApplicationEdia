import React, { useState, useEffect } from 'react';
import { Input, Typography, Space, Form, Button } from 'antd';
import { Container, Col } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'antd/lib/layout/layout';
import Nav from './nav';
import { BulkWriteError } from 'mongodb';

function UserAccount() {

        return (
            <Container>
                <Nav />

                <Col>
                <h1>Mes informations personnelles</h1>

                    <Form>
                        <Form.Item style={{width:'345px'}} label="">
                            <Input placeholder="Prénom" />
                        </Form.Item>
                        <Form.Item style={{width:'345px'}} label="">
                            <Input placeholder="Nom" />
                        </Form.Item>
                        <Form.Item style={{width:'345px'}} label="">
                            <Input placeholder="Téléphone" />
                        </Form.Item>
                        <Form.Item style={{width:'345px'}} label="">
                            <Input placeholder="Mail" />
                        </Form.Item>
                        <Form.Item style={{width:'345px'}} label="">
                            <Input placeholder="Entreprise" />
                        </Form.Item>
                        <Form.Item style={{width:'345px'}} label="">
                            <Input placeholder="Siret" />
                        </Form.Item>
                        <Form.Item style={{width:'345px'}} label="">
                            <Input placeholder="Fonction" />
                        </Form.Item>
                        <Form.Item>
                            <Button style={{width:'100px',  background: "#0A62D0" }} type="primary">Enregister</Button>
                        </Form.Item>
                    </Form>

                </Col>


            </Container>
        )

    };

    export default UserAccount

