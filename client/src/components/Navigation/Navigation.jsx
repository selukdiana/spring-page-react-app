import { NavigationItem } from './NavigationItem'
import styles from './Navigation.module.css'
import { useSelector } from 'react-redux'

export const Navigation = ({ isSideBarOpened }) => {
  const headerData = useSelector((state) => state.header.headerData)
  return (
    <nav
      className={styles.nav}
      data-is-opened={isSideBarOpened ? 'true' : 'false'}
    >
      <ul className={styles.list}>
        {headerData.map((elem) => (
          <NavigationItem elem={elem} key={elem.id} />
        ))}
      </ul>
    </nav>
  )
}
