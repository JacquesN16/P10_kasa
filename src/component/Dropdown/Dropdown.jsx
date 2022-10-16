import "./dropdown.scss"
import { useState, useEffect } from 'react';

export default function Dropdown (props) {

    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [dropdownClass, setDropdownClass] = useState("")

    const toggleDropdown = () => setOpen(!isOpen);
  
    const handleItemClick = (id) => {
        selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    }
  
    
    useEffect(()=>{
      if(!props || !props.data){
        setItem([])
      }
      if(props.dropdownClass){
        setDropdownClass(props.dropdownClass)
      }
      
      const type = typeof props.data
      if(type == 'string'){
        setItem([props.data])
      } else {
        setItem(props.data)
      }
      

    },[props])
  return (
    <div className={`dropdown ${dropdownClass ? dropdownClass : ''}`} id={props.dropDownID}>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {props.name}
        <i className={`fas fa-chevron-up icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items && items.map((item,idx) => (
          <div 
            key={idx} 
            className="dropdown-item" 
            onClick={e => handleItemClick(e.target.id)} id={item.id}
          >
            <span className={`dropdown-item-dot ${item.id === selectedItem && 'selected'}`}>• </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )

}