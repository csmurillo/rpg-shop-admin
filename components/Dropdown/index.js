import { useEffect, useState } from "react";
import styled from "styled-components";

const Dropdown = ({children})=>{
    const [dropdownActive,setdropdownActive]=useState(false);
    const dropdownClick = (e)=>{
        setdropdownActive(!dropdownActive);
    };
    useEffect(()=>{
        window.addEventListener('click',(e)=>{
            // console.log(e.target.parents('dropdownClickable'));
        });
        
    },[]);
    return (
        <DropdownContainer>
            <div id="dropdownClickable" onClick={dropdownClick} onBlur={()=>{console.log('blur');}}>
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



