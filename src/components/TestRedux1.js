import React from "react"
import { useSelector } from "react-redux"

function TestRedux1() {
  const { user } = useSelector((state) => ({ ...state }))
  console.log("user", user)
  return <div>TestRedux1 {user.value}</div>
}

export default TestRedux1
