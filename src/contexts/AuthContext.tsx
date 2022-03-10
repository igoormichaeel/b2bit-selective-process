import Router from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

type SignInCredentials = {
  email?: string;
  password?: string;
};

type User = {
  avatarUrl: string;
  name: string;
  email: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User;
  isAuthenticated: boolean;
};

interface AuthPropviderProps {
  children: ReactNode;
}

type ResponseGetData = {
  avatar: {
    image_high_url: string;
  };
  name: string;
  last_name: string;
  email: string;
};

type ResponsePostData = {
  user: {
    name: string;
    last_name: string;
    avatar: {
      image_high_url: string;
    };
  };
  tokens: {
    access: string;
    refresh: string;
  };
};

let authChannel: BroadcastChannel;

export function signOut() {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');

  authChannel.postMessage('signOut');

  Router.push('/');
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthPropviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          Router.push('/');
          break;
        case 'signIn':
          Router.push('/dashboard');
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const access = localStorage.getItem('access');

    if (access) {
      api
        .get<ResponseGetData>('profile', {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        })
        .then((response) => {
          const avatarUrl = response.data.avatar.image_high_url;
          const name = `${response.data.name} ${response.data.last_name}`;
          const email = response.data.email;

          setUser({
            avatarUrl,
            name,
            email,
          });
        })
        .catch(() => {
          signOut();
        });
    } else {
      Router.push('/');
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post<ResponsePostData>('/tokens/', {
        email,
        password,
      });

      const access = response.data.tokens.access;
      const refresh = response.data.tokens.refresh;
      const name = `${response.data.user.name} ${response.data.user.last_name}`;
      const avatarUrl = response.data.user.avatar.image_high_url;

      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);

      setUser({
        avatarUrl,
        name,
        email,
      });

      Router.push('/dashboard');

      authChannel.postMessage('signIn');
    } catch (error) {
      // tratar erro (colocar aquele pop-up do toastfy)
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
