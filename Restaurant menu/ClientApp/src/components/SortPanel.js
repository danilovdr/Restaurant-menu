import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardTitle, CardBody, Nav, NavItem, NavLink, Button } from 'reactstrap';

const SortPanel = (props) => {
    //const arrayUp = <>&#11014;</>;
    //const arrayDown = <>&#11015;</>;

    //const [isNameSort, setIsNameSort] = useState(false);
    //const [isCostSort, setIsCostSort] = useState(false);
    //const [isWeightSort, setIsWeightSort] = useState(false);
    //const [isCaloriesSort, setIsCaloriesSort] = useState(false);
    //const [isCoockingTimeSort, setIsCoockingTimeSort] = useState(false);

    const sortByName = () => props.sortDish("Name");
    const sortByCost = () => props.sortDish("Cost");
    const sortByWeight = () => props.sortDish("Weight");
    const sortByCalories = () => props.sortDish("Calories");
    const sortByCoockingTime = () => props.sortDish("CoockingTime");

    return (
        <Card className="mt-3">
            <CardBody>
                <CardTitle>Sort</CardTitle>
                <Nav>
                    <NavItem>
                        <NavLink href="#" onClick={sortByName}> Name</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={sortByCost} > Cost</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={sortByWeight} > Weight</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={sortByCalories} > Calories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={sortByCoockingTime} > Coocking time</NavLink>
                    </NavItem>
                </Nav>
            </CardBody>
        </Card>
    )
}

export default SortPanel;