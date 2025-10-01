import { Main } from "@/app/Main.tsx"
import { Route, Routes } from "react-router"
import { Login } from "@/features/todolists/ui/Login/Login.tsx"
import { PageNotFound } from "@/common/components/PageNotFound/PageNotFound.tsx"


export const Path = {
  Main: '/',
  Login: 'login',
  NotFound: '*',
} as const

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Main} element={<Main/>} />
      <Route path={Path.Login} element={<Login/>} />
      <Route path={Path.NotFound} element={<PageNotFound/>} />
    </Routes>
    )
}