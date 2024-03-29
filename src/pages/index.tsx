import * as yup from 'yup';
import Head from 'next/head';
import Router from 'next/router';
import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AuthContext } from '../contexts/AuthContext';
import { Container, FormContainer, Logo, Main } from '../styles/Home';

type SignInFormData = {
  email?: string;
  password?: string;
};

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Must be a valid email'),
  password: yup.string().required('Password is required'),
});

import { toast } from 'react-toastify';

const SignIn: NextPage = () => {
  useEffect(() => {
    const access = localStorage.getItem('access');

    if (access) {
      Router.push('/dashboard');
    }
  }, []);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const { signIn } = useContext(AuthContext);

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await signIn(data);
  };

  return (
    <>
      <Head>
        <title>SignIn | b2bit</title>
      </Head>

      <Main theme={{ bg: '--gray-50' }}>
        <Container>
          <Logo src="/assets/images/logo.png" alt="Logo" />

          <FormContainer onSubmit={handleSubmit(handleSignIn)}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="@gmail.com"
              {...register('email')}
            />
            {errors?.email && <span>{errors.email.message}</span>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="****************"
              aria-errormessage={errors.password}
              {...register('password')}
            />
            {errors?.password && <span>{errors.password.message}</span>}

            <button type="submit">Sign In</button>
          </FormContainer>
        </Container>
      </Main>
    </>
  );
};

export default SignIn;
