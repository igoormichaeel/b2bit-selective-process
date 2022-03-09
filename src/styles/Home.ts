import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  background: var(--gray-50);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 438px;
  width: 90%;
  height: 534px;

  padding: 2.5rem 1.6rem;

  background: #fff;
  border-radius: 2.2rem;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.21);

  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  max-width: 310px;
  width: 80%;

  margin: 1.675rem auto 3rem auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 700;

    margin-bottom: 0.9rem;
  }

  input {
    height: 3.4rem;

    margin-bottom: 1.8rem;
    padding: 1rem;

    font-size: 1rem;

    background: var(--gray-100);

    border: 0;
    border-radius: 0.875rem;
  }

  button {
    margin-top: 0.5rem;
  }
`;
