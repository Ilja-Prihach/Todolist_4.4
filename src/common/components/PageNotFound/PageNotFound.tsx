import s from "./PageNotFound.module.css"
import Button from "@mui/material/Button"
import { Link } from "react-router"

export const PageNotFound = () => {
  return (
    <>
      <h1 className={s.title}>404</h1>
      <h2 className={s.subtitle}>page not found</h2>
      <Button component={Link} to="/">
        Return to task list
      </Button>
    </>
  )
}