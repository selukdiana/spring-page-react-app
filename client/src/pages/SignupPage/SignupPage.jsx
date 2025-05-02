import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link, Navigate } from 'react-router'
import { signUpUser } from '../../store/slices/authSlice'
import styles from './SignupPage.module.css'
import { Input } from '../../components/Input'
import { ErrorMessage } from '../../components/ErrorMessage'

export const SignupPage = () => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.auth.status)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    age: undefined,
    firstName: '',
    lastName: '',
  })

  const errorData = useSelector((state) => state.auth.errors)

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSignUp = () => {
    dispatch(signUpUser(formData))
  }

  const inputArray = []
  for (const fieldName in formData) {
    inputArray.push(
      <Input
        key={fieldName}
        name={fieldName}
        formData={formData}
        handler={handleFormChange}
        type={
          fieldName === 'password' || fieldName === 'confirmPassword'
            ? 'pasword'
            : fieldName === 'age'
              ? 'number'
              : 'text'
        }
      >
        <ErrorMessage msg={errorData[fieldName] ? errorData[fieldName] : ''} />
      </Input>
    )
  }

  return status === 'signedUp' ? (
    <Navigate to="/login" />
  ) : (
    <section className="signup">
      <div className={styles.content}>
        <form className={styles.form} action={handleSignUp}>
          {inputArray.map((input) => input)}
          <div className={styles.formFooter}>
            <Link to="/login" className={styles.link}>
              Log in
            </Link>
            <button type="submit" className={styles.button}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
