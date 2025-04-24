import { SpringCard } from './SpringCard'
import { SpringInput } from './SpringInput/SpringInput'
import { useDispatch, useSelector } from 'react-redux'
import styles from './SpringComponents.module.css'
import { useEffect } from 'react'
import { fetchSpringComponents } from '../../store/slices/springComponentsSlice'

export const SpringComponents = () => {
  const dispatch = useDispatch()
  const components = useSelector((state) => state.springComponents.components)
  useEffect(() => {
    dispatch(fetchSpringComponents())
  }, [])

  return (
    <section className={styles.components}>
      <div className="container">
        <SpringInput />
        <div className={styles.content}>
          {!components.length
            ? 'No results'
            : components.map((elem) => (
                <SpringCard elem={elem} key={elem.id} />
              ))}
        </div>
      </div>
    </section>
  )
}
