import React, { useState } from 'react';
import './CardComponent.css';
import {Card} from 'react-bootstrap';
import {useLocalStorage} from '../localStorageHook'

function CardComponent(props) {
    const { card , deleteCard,changeContent } = props
    const [content,setContent] =  useLocalStorage("content", false);
    const handleDelete = () =>{
        console.log('delete card')
        deleteCard(card.id)
    }
    const toggleContent =()=>{
        setContent(content => !content)
    }
    const addContent =(event)=>{
        console.log(event.target.value)
        changeContent(event.target.value,card.id)
    }
    const onDragStart=(e,id)=>{
        e.dataTransfer.setData("id",id)
    }
    return (
        <div className="cardContainer" >
            <Card >
                <Card.Body>
                    <Card.Title>
                        <span>{card.title}</span>
                        <a className="deleteBtn" href="/#" onClick={handleDelete} >x</a>
                    </Card.Title>
                    <Card.Text >
                        {card.content } 
                    </Card.Text>
                    <Card.Text>
                        {card.id}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent
