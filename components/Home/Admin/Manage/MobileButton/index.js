import styled from 'styled-components';

const MobileButton = ({children})=>{
    return (
        <MobileButtonContainer>
            <MobileButtonWrap>
                <MobileButtonGroup className='center'>
                    <Button color={'blue'}>Create Admin</Button>
                    <Button color={'white'}>View Admin</Button>
                </MobileButtonGroup>
            </MobileButtonWrap>
        </MobileButtonContainer>
    );
};
const MobileButtonContainer=styled.div`
position:absolute;
bottom:0; left:0;
width:100%; height:60px;
// border:5px solid pink;
`;
const MobileButtonWrap=styled.div`
width:100%; height:100%;
background-color:white;
`;
const MobileButtonGroup=styled.div`
width:100%; height:100%;
`;
const Button=styled.button`
    // width:200px; height:80px;
    background: white;
    border:1px solid gray;
    border-radius:5px;
    margin-left:5px;
    padding:10px 40px 10px 40px;
    font-size:1.2em;
    &:hover{
        cursor:pointer;
    }
`;

export default MobileButton;



