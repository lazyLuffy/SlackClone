import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React, { useEffect, useRef } from 'react'
import { useCollection,useDocumentData } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
// import { selectedRoomId } from '../features/appSlice';
import { db } from '../firebase';
import ChatInput from './ChatInput';
import Message from './Message';

function Chat() {
    const chatRef = useRef(null)
    const {roomId} = useSelector(state=>state.apps)
   const [roomDetails]=useDocumentData(roomId && db.collection("rooms").doc(roomId))
    const [roomMessages,loading] = useCollection(roomId && db
            .collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timeStamp",'asc') 
            )
    console.log(roomDetails,"I am ROOM DETAILS")
    useEffect(()=>{
        chatRef.current.scrollIntoView({
            behavior:"smooth"
        })
    },[roomId,loading])
  return (
    <ChatContainer>
        <>
        <Header>
            <HeaderLeft>
                <h4>
                    <strong>#jatin Adhikari</strong>
                <StarBorderOutlined/>
                </h4>
            </HeaderLeft>
            <HeaderRight>
                <p>
                    <InfoOutlined/>
                    Details
                </p>
            </HeaderRight>
        </Header>
        <ChatMessages>
            {roomMessages?.docs.map(doc=>{
                const {message,timeStamp,user,userImage}=doc.data()
                return(
                    <Message
                    key={doc.id}
                    message={message}
                    timeStamp={timeStamp}
                    user={user}
                    userImage={userImage}
                    />
                )
            })}
            <ChatBottom ref={chatRef}/>
        </ChatMessages>
        <ChatInput
        chatRef={chatRef}
         channelId={roomId}
        />
        </>
    </ChatContainer>
  )
}

export default Chat;

const ChatBottom = styled.div`
padding-bottom:200px;
`

const Header = styled.div`

display: flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div`

`;
const HeaderLeft = styled.div`
display: flex;
align-items: center;
>h4{
    display: flex;
    text-transform: lowercase;
}
>h4>.MuiSvgIcon-root{
    margin-left: 20px;
    font-size: 18px;
}
`;

const HeaderRight = styled.div`
/* display: flex;
align-items: center; */
>p{
    display: flex;
    align-items: center;
    font-size: 14px;
}

>p>.MuiSvgIcon-root{
    margin-left:5px !important;
    font-size:16px
}

`;


const ChatContainer = styled.div`
flex:0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top:60px;

`