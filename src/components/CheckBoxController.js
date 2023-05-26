import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function ControlledCheckbox(props) {
  const { handleChange, checked } = props

  return (
    <Checkbox
      defaultChecked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}