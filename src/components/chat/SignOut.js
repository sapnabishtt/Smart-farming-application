import React from 'react'
import { auth } from '../../Firebase.js'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', color:'white',backgroundColor:'white', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <button  className='btn btn-success' style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut
 