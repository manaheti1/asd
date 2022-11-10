import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from './listitem'
const List = ({list})=>{
    return <div id="list">
        {list.map(todo=>(
            <ListItem key={todo.id} item={todo}/>
        ))}
        
    </div>
}

export default List;