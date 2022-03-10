import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 4.4rem;

  display: flex;
  align-items: center;
  justify-content: right;

  button {
    width: 17rem;
    height: 2.75rem;

    margin-right: 2.125rem;
  }
`;

export const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 4.4rem);

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--blue-50);
`;

export const Container = styled.div`
  max-width: 400px;
  width: 90%;

  padding: 1.75rem;

  background: var(--gray-50);
  border-radius: 1rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.16);

  p {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Avatar = styled.img`
  max-width: 310px;
  width: 80%;

  display: block;

  margin: 0.5rem auto 2rem;
`;

export const ProfileInfos = styled.div`
  p {
    text-align: left;

    margin-bottom: 0.4rem;
  }

  span {
    display: block;

    height: 3rem;

    padding: 1rem;

    font-size: 0.9rem;

    background: var(--gray-100);

    border: 0;
    border-radius: 0.5rem;

    & + p {
      margin-top: 1.8rem;
    }
  }
`;
