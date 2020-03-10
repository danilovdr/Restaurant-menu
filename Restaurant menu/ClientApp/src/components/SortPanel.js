import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardTitle, CardBody, Nav, NavItem, NavLink } from 'reactstrap';

const SortPanel = (props) => {
    return (
        <Card className="mt-3">
            <CardBody>
                <CardTitle>Sort</CardTitle>
                <Nav>
                    <NavItem>
                        <NavLink className="text-primary br-secondary" href="#"> Name</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Cost</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Weight</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Calories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Coocking time</NavLink>
                    </NavItem>
                </Nav>
            </CardBody>
        </Card>
    )
}

export default SortPanel;