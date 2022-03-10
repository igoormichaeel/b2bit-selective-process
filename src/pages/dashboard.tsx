import Head from 'next/head';
import Router from 'next/router';

import {
  Container,
  Header,
  Main,
  ProfileInfos,
  ProfilePicture,
} from '../styles/Dashboard';

export default function Dashboard() {
  function signOut() {
    Router.push('/');
  }

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
          <ProfilePicture src="assets/images/profile-pic.png" />

          <ProfileInfos>
            <p>
              Your <strong>Name</strong>
            </p>
            <span>Chistine James</span>

            <p>
              Your <strong>E-mail</strong>
            </p>
            <span>chistinejames@gmail.com</span>
          </ProfileInfos>
        </Container>
      </Main>
    </>
  );
}
