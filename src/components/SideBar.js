import React from 'react'
import styled from 'styled-components'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from '../components/SidebarOption'
import { useCollection } from 'react-firebase-hooks/firestore';
import {InsertComment,Inbox,Drafts,BookmarkBorder,PeopleAlt,Apps,FileCopy,ExpandLess, ExpandMore, Add} from '@material-ui/icons'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Hamburger from 'hamburger-react'

function SideBar() {
    const [channels] = useCollection(db.collection("rooms"))
    const [ user] =useAuthState(auth)
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Anime Talks</h2>
                <h3>
                    <FiberManualRecord/>
                    {user?.displayName}
                    <HamburgerIcon>
                        <Hamburger/>
                    </HamburgerIcon>
                </h3>
            </SidebarInfo>
            <CreateIcon/>
        </SidebarHeader>
        <SidebarOption Icon = {InsertComment} title = "Threads"/>
        <SidebarOption Icon = {Inbox} title = "Mentions & reactions"/>
        <SidebarOption Icon = {Drafts} title = "Saved Items"/>
        <SidebarOption Icon = {BookmarkBorder} title = "Channel browser"/>
        <SidebarOption Icon = {PeopleAlt} title = "People & user groups"/>
        <SidebarOption Icon = {Apps} title = "Apps"/>
        <SidebarOption Icon = {FileCopy} title = "File Browser"/>
        <SidebarOption Icon = {ExpandLess} title = "TShow less"/>
        <hr />
        <SidebarOption Icon ={ExpandMore} title = "Channels"/>
        <hr/>
        <SidebarOption Icon={Add} addChannelOption title="Add Channel"/>
        {channels?.docs.map((doc) => 
        {
            return(
            <SidebarOption
            key={doc.id}
            id={doc.id}
            title={doc.data().name}
            />
            )

        
            
}
            
        )}
    </SidebarContainer>

  )
}

export default SideBar

const HamburgerIcon = styled.div`

`

const SidebarContainer = styled.div`
 color:white;
 background-color: var(--slack-color);
 flex:0.3;
 border:1px sold #49274b;
 max-width: 260px;
 margin-top: 60px;
 overflow: scroll;
 >hr{
     margin-top:5px;
     margin-bottom:5px;
     border:1px solid white;
 }
 @media (max-width: 320px) {
    display: none;
  }
`;
const SidebarHeader = styled.div`
display: flex;
border-top: 1px solid #49274b;
border-bottom: 1px solid #49274b;
padding:13px;

>.MuiSvgIcon-root{
    padding: 2px;
    color:#49274b;
    font-size: 28px;
    background-color: white;
    border-radius: 999px;
}
`;

const SidebarInfo = styled.div`
    flex:1;
    >h1{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    >h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    >h3>.MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color:green;
    }
`;