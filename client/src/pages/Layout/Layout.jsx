import { Logo } from '../../components/Logo'
import { HeaderMenu } from '../../components/HeaderMenu'
import style from './Layout.module.css'
import { Outlet } from 'react-router'
export const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.headerContent}>
            <Logo />
            <HeaderMenu />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}
