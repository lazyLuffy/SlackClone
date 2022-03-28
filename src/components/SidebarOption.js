// import { IconButton } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase';
import {useDispatch, useSelector} from 'react-redux'
import { enterRoom } from '../features/appSlice';

function SidebarOption({Icon,title,addChannelOption,id}) {
  const {roomId} = useSelector(state=>state.apps)
  const dispatch = useDispatch()
  const addChannel = ()=>{
    const channelName = prompt("Please Enter the Channel Name");
    if(channelName){
      db.collection('rooms').add({
        name:channelName,
      })
    }
  }
  const selectChannel = ()=>{
    if(id)
    {
      console.log("hey i am id ",id)
      dispatch(enterRoom({
        roomId:id,
      }))
      console.log("Hey i am useSelector RoomID",roomId)
    }
  }
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
      >
        {Icon && <Icon fontSize = "small"/>}
        
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>#</span>{title}
          </SidebarOptionChannel>
        )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
display: flex;
font-size:12px;
align-items: center;
padding:5px;
cursor:pointer;
>.MuiSvgIcon-root{
  font-size: small;
}
 :hover{
   opacity: 0.9;
   background-color: #340e36;
 }
 >h3{
   font-weight: 500;
   padding:0 10px;
   font-size:small;
 }
 >h3>span>{
   padding:15px;
 }
`
const SidebarOptionChannel = styled.div`
/* padding-left:2px; */
font-weight: 500;
padding:0 10px;
font-size:small;
`