import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';

const Filter = () => {
    const cardStyle = {
        width: "250px",
        alignSelf: "flex-start"
    };

    return (
        <Card className="mr-3" style={cardStyle} >
            <CardBody>
                <h3>Filter</h3>
                <FormGroup>
                    <Label form="nameFilter">Name</Label>
                    <Input type="text" id="nameFilter" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label>Cost</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="min"/>
                        <Input className="w-50" type="text" placeholder="max" />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Weight</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="min" />
                        <Input className="w-50" type="text" placeholder="max" />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Calories</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="min" />
                        <Input className="w-50" type="text" placeholder="max" />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Coocking time</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="min" />
                        <Input className="w-50" type="text" placeholder="max"/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Button className="w-100" color="primary"> Filter</Button>
                </FormGroup>
                <FormGroup>
                    <Button className="w-100" color="secondary"> Reset</Button>
                </FormGroup>
            </CardBody>
        </Card>
    )
}

export default Filter;