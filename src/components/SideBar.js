import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const testStyles = makeStyles({
  test:{
    width: '200px'
  }
});
export default function SideBar() {
  const classes = testStyles()
  const itemsList = [
    {
      text: 'Inbox',
      icon: <InboxIcon />
    },
    {
      text: 'Starred',
      icon: <MailIcon />
    },
    {
      text: 'Send Email',
      icon: <MailIcon />

    },
    {
      text: 'Drafts',
      icon: <MailIcon />

    }
  ]
  return (
    <Drawer variant="permanent"className={classes.test} >
      <List className={classes.test}>
        {itemsList.map((item, index) => {
         const {text, icon} = item;
         return(
          <ListItem button key={text}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
          </ListItem>
        )})}
      </List>
    </Drawer>
  );
}
