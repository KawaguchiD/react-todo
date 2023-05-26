import React from 'react'
import { ListItem, ListItemText, Button, Divider } from '@mui/material'
import ControlledCheckbox from "./CheckBoxController";

const MUIListItem = (props) => {
    const { name, onClickCheckBox, onClickDelete, checked } = props
    return (
        <>
            <ListItem primary="Inbox">
                <ControlledCheckbox checked={checked} handleChange={onClickCheckBox} />
                <ListItemText primary={name} />
                <ListItemText sx={{textAlign: 'right'}}>
                    <Button onClick={onClickDelete}>削除</Button>
                </ListItemText>
            </ListItem>
            <Divider />
        </>
    )
}

export default MUIListItem