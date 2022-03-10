import Head from 'next/head';
import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

import {
  Container,
  Header,
  Main,
  ProfileInfos,
  Avatar,
} from '../styles/Dashboard';

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Dashboard | b2bit</title>
      </Head>

      <Header>
        <nav>
          <button onClick={signOut}>Sign out</button>
        </nav>
      </Header>

      <Main>
        <Container>
          <p>Profile picture</p>
          <Avatar src={user?.avatarUrl} />

          <ProfileInfos>
            <p>
              Your <strong>Name</strong>
            </p>
            <span>{user?.name}</span>

            <p>
              Your <strong>E-mail</strong>
            </p>
            <span>{user?.email}</span>
          </ProfileInfos>
        </Container>
      </Main>
    </>
  );
}
