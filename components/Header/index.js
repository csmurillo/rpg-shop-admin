import styled from 'styled-components';
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";

import styles from '../../styles/Header.module.css';
import { useState } from 'react';

import Dropdown from '../Dropdown';
import Menu from '../Menu';

const Header = ()=>{
    const [loggedIn, setLoggedIn]=useState(true);

    return(
        <HeaderContainer>
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
                        <div className={styles.rightItem2}>
                            <AiOutlineMenu></AiOutlineMenu>
                            <Menu>
                            </Menu>
                        </div>
                        {/* <div className={styles.rightItem2}>
                            <AiOutlineMenu></AiOutlineMenu>
                        </div> */}
                    </div>
                }
            </Wrap>
        </HeaderContainer>
    );
};
const HeaderContainer = styled.div`
    padding-left:50px;
    padding-right:50px;
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



