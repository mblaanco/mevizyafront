import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      margin: 5px 0 0;
      height: 44px;
      background: none;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.01, '#ff02')};
      }
    }
  }
  ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      margin-top: 30px;
    }
`;

export const List = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  strong {
    display: block;
    color: #7159c1;
    font-size: 20px;
    font-weight: normal;

  }

  span {
    display: block;
    margin-top:3px;
    color:#666;

  }
`;
