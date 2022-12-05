import React, { useEffect, useState } from 'react' // we need this now also in component files
import { 
  TableContainer, 
  Table, 
  TableBody,
  TableCell,
  TableRow,
  Paper
} from '@mui/material'
import spotifyService from '../services/spotify'

const UserInfo = ({user}) => {

  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const data = await spotifyService.getTopTracks();
        console.log(data)
        setTracks(data.items)
        console.log(tracks)
        return data
      } catch(e) {
        console.log(e)
      }
    }

    if (user) {
      fetchTopTracks();
    }
  }, [user])

  if (!tracks) {
    return <p>Loading...</p>
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {tracks.map(track => (
            <TableRow key={track.id}>
              <TableCell>
                {track.name}
              </TableCell>
              <TableCell>
                {track.artists[0].name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserInfo