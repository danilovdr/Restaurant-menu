import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Pagination, PaginationLink, PaginationItem } from 'reactstrap';

const DishPagination = (props) => {
    const createPaginationItems = () => {
        let items = [];

        for (let i = 0; i < props.totalPages; i++) {
            if (i == props.numberPage) {
                items.push(
                    <PaginationItem active key={i}>
                        <PaginationLink id={i} hfef="#" onClick={changePage} > {i + 1}</PaginationLink>
                    </PaginationItem>
                );
            } else {
                items.push(
                    <PaginationItem key={i}>
                        <PaginationLink id={i} hfef="#" onClick={changePage} > {i + 1}</PaginationLink>
                    </PaginationItem>
                );
            }
        }

        return items;
    };

    const changePage = (event) => props.setNumberPage(parseInt(event.target.id));

    const nextPage = () => {
        if (props.numberPage < props.totalPages - 1) {
            props.setNumberPage(props.numberPage + 1);
        }
    }

    const prevPage = () => {
        if (props.numberPage != 0) {
            props.setNumberPage(props.numberPage - 1);
        }
    }

    return (
        <Pagination>
            <PaginationItem>
                <PaginationLink previous onClick={prevPage} />
            </PaginationItem>
            {createPaginationItems()}
            <PaginationItem>
                <PaginationLink next onClick={nextPage} />
            </PaginationItem>
        </Pagination>
    );
}

export default DishPagination;