import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { signUpUser } from '../../store/slices/authSlice'
import styles from './SignupPage.module.css'

export const SignupPage = () => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.auth.status)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    age: undefined,
    firstName: '',
    lastName: '',
  })
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSignUp = () => {
    dispatch(signUpUser(formData))
  }

  useEffect(() => {
    // if (status === 'unauthorized') alert('Invalid input!')
  }, [status])

  return status === 'signedUp' ? (
    <Navigate to="/login" />
  ) : (
    <section className="signup">
      <div className={styles.content}>
        <form className={styles.form} action={handleSignUp}>
          <div className={styles.inputItem}>
            <label htmlFor="firstName" className={styles.label}>
              firstName
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.input}
              value={formData.firstName}
              onChange={handleFormChange}
            />
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="lastName" className={styles.label}>
              lastName
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.input}
              value={formData.lastName}
              onChange={handleFormChange}
            />
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="age" className={styles.label}>
              age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              className={styles.input}
              value={formData.age}
              onChange={handleFormChange}
            />
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="username" className={styles.label}>
              username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              value={formData.username}
              onChange={handleFormChange}
            />
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="password" className={styles.label}>
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              value={formData.password}
              onChange={handleFormChange}
            />
          </div>
          <button type="submit" className={styles.button}>
            Sign up
          </button>
        </form>
      </div>
    </section>
  )
}
