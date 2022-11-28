import { useEffect, useState } from 'react'
import {getAuth} from 'firebase/auth'

function Profile() {

const [user, setUser] = useState(null)

const auth = getAuth()
useEffect(() => {
  setUser(auth.currentUser)
}, [ ])
//arrays should have a space indicating empty

return user ? <h1>{user.displayName}</h1> : 'Not Logged In'
}

export default Profile