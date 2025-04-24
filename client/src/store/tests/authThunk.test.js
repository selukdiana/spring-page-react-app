import { loginUser } from "../slices/authSlice";

global.fetch = jest.fn();
describe('authThunk', () => {
  test('should fetch with resolved response', async () => {
    const userData = {
      name: 'admin',
      password: '1234'
    }
    const answer = true;
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(answer)
    })
    const dispatch = jest.fn();
    const thunk = loginUser(userData);
    await thunk(dispatch)

    const { calls } = dispatch.mock;
    console.log(calls)
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe(loginUser.pending().type)
    expect(end[0].type).toBe(loginUser.fulfilled().type)
    expect(end[0].payload).toBe(true)
  });
  test('should fetch with rejected response', async () => {
    const userData = {
      name: 'aaaa',
      password: 'bbbb'
    }
    fetch.mockResolvedValue({
      ok: false,
    })
    const dispatch = jest.fn();
    const thunk = loginUser(userData);
    await thunk(dispatch, () => ({}))

    const { calls } = dispatch.mock;
    console.log(calls)
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe(loginUser.pending().type)
    expect(end[0].type).toBe(loginUser.rejected().type)
    expect(end[0].payload).toBe("Can't fetch")
  });
})