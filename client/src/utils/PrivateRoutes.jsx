import { Outlet, Navigate } from 'react-router'
import { useSelector } from 'react-redux'

export const PrivateRoutes = () => {
  const status = useSelector((state) => state.auth.status)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   if (localStorage.getItem('accessToken')) {
  //     dispatch(checkAuth())
  //   }
  // }, [])
  return status === 'authorized' ? <Outlet /> : <Navigate to="/login" />
}
