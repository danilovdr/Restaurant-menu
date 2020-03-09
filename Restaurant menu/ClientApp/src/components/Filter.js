import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Card, CardBody, FormGroup, Label, Input } from 'reactstrap';

const Filter = () => {

    const cardStyle = {
        alignSelf: "flex-start"
    }

    const halfInputContainer = {
        display: "flex",
        justifyContent: "space-between"
    }

    const halfInput = {
        display: "inline",
        width: "90px"
    }

    return (
        <Card style={cardStyle} >
            <CardBody>
                <h3>Filter</h3>
                <FormGroup>
                    <Label form="nameFilter">Name</Label>
                    <Input type="text" id="nameFilter" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label>Cost</Label>
                    <div style={halfInputContainer} >
                        <Input type="text" placeholder="min" style={halfInput} />
                        <Input type="text" placeholder="max" style={halfInput} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Weight</Label>
                    <div style={halfInputContainer} >
                        <Input type="text" placeholder="min" style={halfInput} />
                        <Input type="text" placeholder="max" style={halfInput} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Calories</Label>
                    <div style={halfInputContainer} >
                        <Input type="text" placeholder="min" style={halfInput} />
                        <Input type="text" placeholder="max" style={halfInput} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Coocking time</Label>
                    <div style={halfInputContainer} >
                        <Input type="text" placeholder="min" style={halfInput} />
                        <Input type="text" placeholder="max" style={halfInput} />
                    </div>
                </FormGroup>
                <FormGroup>
                    
                </FormGroup>
            </CardBody>
        </Card>
    )
}

export default Filter;