import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchuser } from '../Features/User/UserSlice'

const User = () => {

    const dispatch = useDispatch();




    const satateuser = useSelector((state) => state.User.user)
    console.log(satateuser)

    useEffect(() => {
        dispatch(fetchuser())
    }, [dispatch])

    return (
        <div>
            <h1>User</h1>
        </div>
    )
}

export default User
