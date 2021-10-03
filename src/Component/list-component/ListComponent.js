import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import './ListComponent.css';
import CardComponent from '../card-component/CardComponent';
import {  Button } from 'react-bootstrap';
import PopOver from '../popover/PopOver';
import {useLocalStorage} from '../localStorageHook'

//TODO

//2. add a cross button

 

function ListComponent(props) {
    const { list,deleteList,changeCardlist} = props
   
    let cardList=  list.cardList
    let count = cardList.length
    const [popoverShow,setPopoverShow] = useLocalStorage("popoverShow", false);
    const handleCardData = (title) => {
    
        let card = {
            id:count,
            title: title,
            content: "CardContent"
        }
        cardList.push(card)
        count = cardList.length
        changeCardlist(cardList,list.id)
    }
    const handleAddCard = () =>{
        setPopoverShow(popoverShow => true)
    }
    const handledelte =() =>{
        deleteList(list.id)
    }

    const deleteCard = (id) =>{
        cardList = cardList.filter((e)=>e.id !== id )
        count = cardList.length
        changeCardlist(cardList,list.id)
    }

    const changeContent = (value,id) => {
        cardList=cardList[id].content=value
        changeCardlist(cardList,list.id)
    }
   const onDragOver =(event) =>{
       event.preventdefault()
   }
   const onDrop=(e)=>{
    
   }
    return (
        <Col className="ListClass" >
            <div className="listTitle">
                <span>{list.title}</span>
                <a className="listDeleteBtn" onClick={handledelte} href="/#">x</a>
            </div>
            <div className="cardList">
                {[...Array(count)].map((_, i) => <CardComponent  key={i} card={cardList[i]} deleteCard ={deleteCard} changeContent={changeContent}></CardComponent>)}
            </div>

            <div className="addCardContainer">
                <Button variant="success" size="sm" className="addCardBtn" onClick={handleAddCard}>
                    +
                </Button>
                { popoverShow ? <PopOver show={popoverShow}  done={handleCardData} /> : <div></div>}
            </div>

        </Col>
    )
}

export default ListComponent
