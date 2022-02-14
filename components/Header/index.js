import styled from 'styled-components';
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import styles from '../../styles/Header.module.css';
import { useRef, useState } from 'react';

import Dropdown from '../Dropdown';
import Menu from '../Menu';

const Header = ()=>{
    const header = useRef();
    const [loggedIn, setLoggedIn]=useState(true);
    const [activeMenu,setActiveMenu]=useState(false);
    const menuActive = (e)=>{
        console.log('menu clicked!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        setActiveMenu(!activeMenu);
    };
    return(
        <HeaderContainer ref={header}>
            <Wrap>
                <div className={styles.leftContainer}>
                    <div className={styles.leftItem1}>
                        <img width={120} height={120} src="/images/rpg-shop-admin.png"/>
                    </div>
                </div>
                {loggedIn &&
                    <div className={styles.rightContainer}>
                        <div className={styles.rightItem1}>
                            <Dropdown>
                                <div className={styles.profileContainer}>
                                    <div className={styles.profileSymbolContainer}>
                                            <CgProfile className={styles.profileSymbol}></CgProfile>
                                    </div>
                                    <div className={`${styles.profileNameContainer} ${styles.center}`}>
                                        <ProfileName>Gilbert</ProfileName>
                                    </div>
                                </div>
                            </Dropdown>
                        </div>
                        <div className={`center ${styles.rightItem2}`}>
                            {!activeMenu&&<AiOutlineMenu className={styles.menu} onClick={menuActive}></AiOutlineMenu>}
                            {activeMenu&&<GrClose className={styles.closeMenu} onClick={menuActive}></GrClose>}
                            <Menu topParent={header} activeMenu={activeMenu}>
                            </Menu>
                        </div>
                    </div>
                }
            </Wrap>
        </HeaderContainer>
    );
};
const HeaderContainer = styled.div`
    padding-left:50px;
    padding-right:50px;
    z-index:9999;
    // border:5px solid pink;
`;
const Wrap = styled.div`
    // border:2px solid pink;
    padding-top:10px;
    padding-bottom:10px;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid gray;
`;
const ProfileName = styled.div`
    font-size:1.2em;
`;

export default Header;



