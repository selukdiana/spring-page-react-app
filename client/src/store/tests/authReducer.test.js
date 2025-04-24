import authReducer, { loginUser } from '../slices/authSlice'

const initialState = {
  status: null,
}
describe('authSlice', () => {
  test('should change status with "auth.pending" action', () => {
    const state = authReducer(initialState, loginUser.pending())
    expect(state.status).toBe('pending')
  })
  test('should change status with "auth.fulfilled" action', () => {
    const state = authReducer(initialState, loginUser.fulfilled())
    expect(state.status).toBe('authorized')
  })
  test('should change status with "auth.rejected" action', () => {
    const state = authReducer(initialState, loginUser.rejected())
    expect(state.status).toBe('unauthorized')
  })
})
