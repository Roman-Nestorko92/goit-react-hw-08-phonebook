import styled from '@emotion/styled';
import { BiUser } from 'react-icons/bi';

export const Wrapper = styled.div`
  @media screen and (min-width: 1310px) {
    display: flex;
    align-items: center;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1310px) {
    margin-bottom: 20px;
  }
`;

export const UserIcon = styled(BiUser)`
  background-color: var(--accent-text-color);
  color: var(--second-text-color);
  padding: 10px;
  border-radius: 50%;
`;

export const TextWrapper = styled.div`
  margin: 0 25px;
`;

export const Text = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const UserName = styled.span`
  color: var(--accent-text-color);
`;

export const Email = styled.p`
  font-size: 14px;
  color: #cccccc;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 35px;
  padding: 0 20px;

  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  transition: background-color var(--main-hover-animation);

  font-family: inherit;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }

  @media screen and (max-width: 1439px) {
    width: 100%;
  }
`;
