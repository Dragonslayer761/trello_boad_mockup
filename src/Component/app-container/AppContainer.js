import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,Row,Button } from 'react-bootstrap';
import ListComponent from '../list-component/ListComponent';
import PopOver from '../popover/PopOver';
import './AppContainer.css'
import {useLocalStorage} from '../localStorageHook'
import { v4 as uuid } from 'uuid';



const AppContainer=()=> {
    const [count,setCount] = useLocalStorage("listcCount", 0);
    const [listState,setListState] = useLocalStorage("listState", []);
    const [popoverShow,setPopoverShow] = useLocalStorage("popoverShow", false);
    const handleAddList = () =>{
        console.log(popoverShow)
        setPopoverShow(popoverShow =>true)
        console.log(popoverShow)
        
    }
    const handleListdata = (title,target) =>{
        setCount(count+1)
        let list = {
            id: uuid(),
            title:title,
            cardList:[]
        }
        setListState(listState => [...listState,list])
        console.log(popoverShow,listState)
        setPopoverShow(popoverShow => false)
        console.log(popoverShow)
    }
    const deleteListContainer = (id) =>{
        setListState(listState => listState.filter((e) => e.id !== id))
        setCount(count =>count-1)
    }
    const handleCardlist =(cardList,id) =>{
       let listarr = [...listState]
       listarr.forEach((listItem) =>{
        if(listItem.id === id){
            listItem.cardList = [...cardList];
        }
       });
       setListState(listarr)
    }
    useEffect(() => {
    
    }, [])
    return (
        <Container>
            <Row>
                <Button variant="primary" size="sm" className="addListbtn" onClick={handleAddList}>
                    Add list
                </Button>
                { popoverShow ? <PopOver show={popoverShow}  done={handleListdata} /> : <div></div>}
            </Row>
            <Row className="listcontainer">
                {[...Array(count)].map((_,i)=> <ListComponent key={i} list={listState[i]} deleteList ={deleteListContainer} changeCardlist={handleCardlist}></ListComponent>)}
            </Row>
        </Container>
    )
}

export default AppContainer;
