// Testing this method of authentication
// Docs: https://www.youtube.com/watch?v=69f5bqRtMtY

// Findings, I get an error loading the whole page because 
import React from 'react'
import { useSession } from "next-auth/react"
import Link from 'next/link'

const AuthWrapper = ({ children }) => {
    const {status} = useSession()
    
    if (status === "authenticated") {
        return (
            <>
                {children}
            </>
        )
    }
    return <p>Access Denied, Please <Link href="/login">Login</Link></p>
}

export default AuthWrapper