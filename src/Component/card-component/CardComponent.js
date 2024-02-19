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
    const removeCardonDrag = (e,id) => {
        e.preventDefault();
        deleteCard(id)
        //changeContent("",cardDetails.id);
    }
    const addContent =(event)=>{
        console.log(event.target.value)
        changeContent(event.target.value,card.id)
    }
    const onDragStart=(e,card)=>{
        e.dataTransfer.clearData();
        console.log(card)
        let strCard = JSON.stringify(card);
        e.dataTransfer.setData("card",strCard)
    }
    return (
        <div className="cardContainer" >
            <Card draggable  onDragStart={(e) => {onDragStart(e,card)}} onDragEnd={(e)=>removeCardonDrag(e,card.id)}>
                <Card.Body>
                    <Card.Title>
                        <span>{card.title}</span>
                        <a className="deleteBtn"  onClick={handleDelete} >x</a>
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
