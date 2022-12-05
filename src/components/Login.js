import React from 'react' // we need this now also in component files
import { endpoints } from '../utils/endpoints'

import { Button, Box, Typography } from '@mui/material'
import { Login as LoginIcon } from '@mui/icons-material'

const Login = () => {

  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
    >
      <div id="login">
        <Typography variant="h1" className="underlined">
          Tool to view your Spotify stats
        </Typography>
        <div style={{height:"30px"}}></div>
        <Button
          variant='contained'
          color='secondary'
          endIcon={<LoginIcon />}
          href={`${endpoints.backendUrl}/login`} >
            Log in with Spotify
        </Button>
      </div>
    </Box>
  )
}

export default Login