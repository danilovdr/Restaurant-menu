import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardTitle, CardBody, Col, InputGroup, Label, Input } from 'reactstrap';

const SortPanel = (props) => {
    const sort = (event) => {
        console.log(event.target.value);
        switch (event.target.value) {
            case "Name":
                props.sortDish("Name", true);
                break;
            case "Cost: Low to High":
                props.sortDish("Cost", true);
                break;
            case "Cost: High to Low":
                props.sortDish("Cost", false);
                break;
            case "Weight: Low to High":
                props.sortDish("Weight", true);
                break;
            case "Weight: High to Low":
                props.sortDish("Weight", false);
                break;
            case "Calories: Low to High":
                props.sortDish("Calories", true);
                break;
            case "Calories: High to Low":
                props.sortDish("Calories", false);
                break;
            case "Coocking time: Low to High":
                props.sortDish("CoockingTime", true);
                break;
            case "Coocking time: High to Low":
                props.sortDish("CoockingTime", false);
                break;
        }
    }

    return (
        <Card className="mt-3">
            <CardBody>
                <Label for="sortSelect">Sort by:</Label>
                <Input className="w-25" type="select" name="select" id="sortSelect" onChange={sort}>
                    <option>Name</option>
                    <option>Cost: Low to High</option>
                    <option>Cost: High to Low</option>
                    <option>Weight: Low to High</option>
                    <option>Weight: High to Low</option>
                    <option>Calories: Low to High</option>
                    <option>Calories: High to Low</option>
                    <option>Coocking time: Low to High</option>
                    <option>Coocking time: High to Low</option>
                </Input>
            </CardBody>
        </Card>
    )
}

export default SortPanel;