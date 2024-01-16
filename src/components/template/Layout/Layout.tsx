
import { NavBar } from '../../organisms'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}
