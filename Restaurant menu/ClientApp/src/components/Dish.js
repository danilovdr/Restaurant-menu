import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter, FormGroup, Label, Input, Button, Alert, CardText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Open from '../img/open.svg';
import Edit from '../img/edit.svg';
import Delete from '../img/delete.svg';

const Dish = (props) => {
    const [viewModal, setViewModal] = useState(false);
    const toggleViewModal = () => setViewModal(!viewModal);
    const [editModal, setEditModal] = useState(false);
    const toggleEditModal = () => setEditModal(!editModal);
    const [deleteModal, setDeleteModal] = useState(false);
    const toggleDeleteModal = () => setDeleteModal(!deleteModal);

    const updateDish = async () => {

    }

    const deleteDish = async () => {
        let url = "https://localhost:44334/api/dish/"

        props.setLoadScreen(true);

        await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: props.dish.id
        });

        props.setLoadScreen(false);
        props.update();
    }


    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.name}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardSubtitle>Описание</CardSubtitle>
                <CardText>{props.dish.description}</CardText>
                <CardSubtitle>Ингридиенты</CardSubtitle>
                <CardText>{props.dish.ingredients}</CardText>
                <CardSubtitle>Цена</CardSubtitle>
                <CardText>{props.dish.cost}</CardText>
                <CardSubtitle>Вес</CardSubtitle>
                <CardText>{props.dish.weight}</CardText>
                <CardSubtitle>Калорийность</CardSubtitle>
                <CardText>{props.dish.calories}</CardText>
                <CardSubtitle>Время приготовления</CardSubtitle>
                <CardText>{props.dish.coockingTime}</CardText>
            </CardBody>
            <CardFooter className="d-flex justify-content-between">
                <Button color="white" onClick={toggleViewModal} >
                    <img className="p-1" src={Open} />
                </Button>
                <Modal isOpen={viewModal} >
                    <ModalHeader>
                        {props.dish.name}
                    </ModalHeader>
                    <ModalBody>
                        <p>Дата создания</p>
                        <p>{props.dish.createDate}</p>
                        <p>Описание</p>
                        <p>{props.dish.description}</p>
                        <p>Цена</p>
                        <p>{props.dish.cost}</p>
                        <p>Вес</p>
                        <p>{props.dish.weight}</p>
                        <p>Калории</p>
                        <p>{props.dish.calories}</p>
                        <p>Время приготовления</p>
                        <p>{props.dish.coockingTime}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggleViewModal}>Закрыть</Button>
                    </ModalFooter>
                </Modal>
                <Button color="white">
                    <img className="p-1" src={Edit} />
                </Button>
                <Button color="white" onClick={toggleDeleteModal} >
                    <img className="p-1" src={Delete} />
                </Button>
                <Modal isOpen={deleteModal} >
                    <ModalBody>
                        <p>Вы действительно хотите удалить блюдо <span className="font-weight-bold">{props.dish.name}</span>?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={deleteDish} > Да</Button>
                        <Button color="primary" onClick={toggleDeleteModal}>Нет</Button>
                    </ModalFooter>
                </Modal>
            </CardFooter>
        </Card>
    );
}

export default Dish;