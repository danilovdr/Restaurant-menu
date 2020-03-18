import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, Label, Input } from 'reactstrap';

const Sort = (props) => {
    const sort = (event) => {
        console.log(event.target.value);
        switch (event.target.value) {
            case "Name":
                props.setSortParams({ fieldName: "Name", ascending: true });
                break;
            case "Cost: Low to High":
                props.setSortParams({ fieldName: "Cost", ascending: true });
                break;
            case "Cost: High to Low":
                props.setSortParams({ fieldName: "Cost", ascending: false });
                break;
            case "Weight: Low to High":
                props.setSortParams({ fieldName: "Weight", ascending: true });
                break;
            case "Weight: High to Low":
                props.setSortParams({ fieldName: "Weight", ascending: false });
                break;
            case "Calories: Low to High":
                props.setSortParams({ fieldName: "Calories", ascending: true });
                break;
            case "Calories: High to Low":
                props.setSortParams({ fieldName: "Calories", ascending: false });
                break;
            case "Coocking time: Low to High":
                props.setSortParams({ fieldName: "CoockingTime", ascending: true });
                break;
            case "Coocking time: High to Low":
                props.setSortParams({ fieldName: "CoockingTime", ascending: false });
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

export default Sort;