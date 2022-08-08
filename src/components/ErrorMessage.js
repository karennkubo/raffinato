import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function ErrorMessage(props) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" onClose={props.close}>
        <AlertTitle>Erro</AlertTitle>
        Valores inválidos!
      </Alert>
    </Stack>
  )
}
