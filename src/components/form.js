import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";

export default function CheckboxLabels(props) {
  const {isCheck, label, handleDelete} = props
  return (
    <FormGroup sx={{display: 'flex', flexDirection: 'inherit'}}>
      <FormControlLabel control={<Checkbox checked={isCheck} />} label={label} />
      <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleDelete} size='1'/>
    </FormGroup>
  );
}