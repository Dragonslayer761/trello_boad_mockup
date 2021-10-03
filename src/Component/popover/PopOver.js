import React,{useState} from 'react';
import './Popover.css'


function PopOver(props) {
    const {show,done} = props;
    const [listTitle,setListTitle] = useState("");
    
    const handleTitlechange = (event) =>{
        setListTitle(event.target.value)
    }
    const handleDone = (event) =>{
        let title = listTitle;
        setListTitle("")
        done(title,event.target)
    }
    return (
      <div className="popOverPosition">
        <div>
          Enter List Name
        </div>
        <div>
          <form onSubmit={handleDone}>
            <span>List Tile :</span>
            <input type="text" name="listTitle" id="listtitle" value={listTitle} onChange={handleTitlechange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }

  export default  PopOver;