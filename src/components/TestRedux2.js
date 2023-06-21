import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logIn, logOut } from "../store/userSlice"

function TestRedux2() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => ({
    ...state,
  }))
  return (
    <div>
      TestRedux2 {user.user}
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>LogOut</button>
    </div>
  )
}

export default TestRedux2
