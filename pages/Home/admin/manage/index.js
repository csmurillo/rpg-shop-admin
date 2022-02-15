import Header from "../../../../components/Header";
import styled from 'styled-components';
import styles from '../../../../styles/Home/Admin/Manage/Manage.module.css';

import ManageSideBar from "../../../../components/Home/Admin/Manage/ManageSideBar";
import CreateAdmin from "../../../../components/Home/Admin/Manage/CreateAdmin";
import MobileButton from "../../../../components/Home/Admin/Manage/MobileButton";
const Manage = ()=>{
    return (
        <>
            <Header></Header>
            <ManageContainer>
                <ManageWrap>
                    <div className={styles.left}>
                        <ManageSideBar></ManageSideBar>
                    </div>
                    <div className={styles.right}>

                    </div>
                </ManageWrap>
                <MobileButton>
                    <div>Create Admin</div>
                    <div>View Admins</div>
                </MobileButton>
            </ManageContainer>
        </>
    );
};
const ManageContainer = styled.div`
    padding-left:50px;
    padding-right:50px;
    flex-grow: 1;
`;
const ManageWrap = styled.div`
    width:100%; height:100%;
    display:flex;
    @media (max-width:900px) {
        display:block;
    }
`;
// const MobileButton = styled.div`
// position:absolute;
// bottom:0; left:0;
// width:100%; height:150px;
// background-color:black;
// `;

export default Manage;

