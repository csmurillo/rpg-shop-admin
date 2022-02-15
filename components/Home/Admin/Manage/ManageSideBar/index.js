import styled from 'styled-components';
import Dropdown from '../../../../Dropdown';
import { IoIosArrowDown } from 'react-icons/io';

const ManageSideBar = ()=>{
    return (
        <ManageSideBarContainer>
            <ManageSideBarWrap>
                <ManageDropDownContainer>
                    <Dropdown>
                        <ManageDropDown>
                            Manage Admin
                            <IoIosArrowDown></IoIosArrowDown>
                        </ManageDropDown>
                    </Dropdown>
                </ManageDropDownContainer>
            </ManageSideBarWrap>
        </ManageSideBarContainer>
    );
};

const ManageSideBarContainer = styled.div`

`;
const ManageSideBarWrap = styled.div`

`;
const ManageDropDownContainer =styled.div`

`;
const ManageDropDown = styled.div`
    padding: 10px 40px 10px 40px;
    border: 1px solid gray;
    border-radius:5px;
    background-color: white;
    display: inline-block;
    font-size: 2em;
    font-weight:200;
    font-family: 'Catamaran', sans-serif;
    &:hover{
        cursor:pointer;
    }
`;

export default ManageSideBar;