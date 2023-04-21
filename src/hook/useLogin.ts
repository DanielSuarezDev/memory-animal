import create, { SetState, GetState } from 'zustand';

type SessionState = {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
};

type SessionStore = {
  (set: SetState<SessionState>, get: GetState<SessionState>): SessionState;
};

const useSessionStore: SessionStore = (set, get) => ({
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
  login: (user: string) => {
    set({ user });
    localStorage.setItem('user', JSON.stringify(user));
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem('user');
  },
});

const useLogin = create(useSessionStore);

export default useLogin;
