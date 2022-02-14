import styled from 'styled-components';
import { useEffect, useState } from "react";

const Menu = ({activeMenu, topParent, children})=>{
    const [headerHeight,setHeaderHeight]=useState('');
    // const 
    useEffect(()=>{
        // console.log('onload menu'+topParent.current.offsetHeight);
        // console.log('window size');
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('active menu'+activeMenu);
        setHeaderHeight(topParent.current.offsetHeight);
    },[]);

    return (
        <MenuScreenContainer activeMenu={activeMenu}>
            <MenuContainer headerHeight={headerHeight}>
                <MenuWrap>
                    <div>Menu</div>
                </MenuWrap>
            </MenuContainer>
        </MenuScreenContainer>
    );
}

const MenuScreenContainer=styled.div`
z-index:-1;
position:absolute;
top:0; left:0;
width:100%; height:100%;
display:none;
flex-direction:column;
@media (max-width: 550px) {
    display: ${props=> props.activeMenu? 'flex' : 'none'};
}
`;
const MenuContainer=styled.div`
flex-grow:1;
margin-top:${props =>props.headerHeight}px;
background-color:lightblue;
`;
const MenuWrap=styled.div`
`;

export default Menu;
