import React from 'react' // we need this now also in component files

const UserInfo = ({user}) => {

  return (
    <table>
      <thead>
        <tr>
          <td>Country</td>
          <td>Display Name</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{user.country}</td>
          <td>{user.display_name}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default UserInfo