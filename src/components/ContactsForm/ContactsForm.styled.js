import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px;
  width: 450px;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.5);
`;

export const Input = styled.input`
  width: 410px;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.5);
    overflow: hidden;
  }
`;
export const Button = styled.button`
  width: 138px;
  height: 44px;
  border-radius: 4px;
  float: right;
  border: 1px solid #253737;
  background: #416b68;
  background-image: -ms-linear-gradient(top, #6da5a3 0%, #416b68 100%);
  padding: 10.5px 21px;
  border-radius: 6px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0,
    inset rgba(255, 255, 255, 0.7) 0 1px 0;
  text-shadow: #333333 0 1px 0;
  color: #e1e1e1;
  cursor: pointer;
  &:hover {
    border: 1px solid #253737;
    text-shadow: #333333 0 1px 0;
    background: #416b68;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#77b2b0),
      to(#416b68)
    );
    color: #fff;
  }
`;
