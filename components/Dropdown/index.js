import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Dropdown = ({children})=>{
    const dropdownClickable = useRef();
    const [dropdownActive,setdropdownActive]=useState(false);
    const dropdownClick = (e)=>{
        setdropdownActive(!dropdownActive);
    };
    useEffect(()=>{
        function dropdownClickableListener(e){
            if(!dropdownClickable.current.contains(e.target)){
                setdropdownActive(false);
            }
        };
        window.addEventListener('click',dropdownClickableListener);
        return () => {
            console.log("cleaned up");
            window.removeEventListener('click', dropdownClickableListener)
        };
    },[]);
    return (
        <DropdownContainer>
            <div className="centerHorizontal" ref={dropdownClickable} onClick={dropdownClick} onBlur={()=>{console.log('blur');}}>
                {children}
            </div>
            <DropdownItems dropdownActive={dropdownActive}>
                <div>item1</div>
                <div>item2</div>
                <div>item3</div>
            </DropdownItems>
        </DropdownContainer>
    );
};

const DropdownContainer = styled.div`
position:relative;
`;
const DropdownItems = styled.div`
position:absolute;
display:${props => props.dropdownActive ? "block" : "none"};
`;

export default Dropdown;



