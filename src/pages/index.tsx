import Head from 'next/head';
import Router from 'next/router';
import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';

import { Container, FormContainer, Logo, Main } from '../styles/Home';

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);

    Router.push('/dashboard');
  }

  return (
    <>
      <Head>
        <title>SignIn | b2bit</title>
      </Head>

      <Main theme={{ bg: '--gray-50' }}>
        <Container>
          <Logo src="/assets/images/logo.png" alt="Logo" />

          <FormContainer onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="****************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Sign In</button>
          </FormContainer>
        </Container>
      </Main>
    </>
  );
};

export default Home;
