import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { accessToken } from '../store/actions/loginActions';
import env from "react-dotenv";
import { useTranslation } from 'react-i18next';
import { Colors } from '../../../shared/styles/Colors';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { t } = useTranslation(['login']);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username !== env.USERNAME || password !== env.PASSWORD) {
      setErrorMessage('Invalid username or password');
    } else {
      setErrorMessage('');
      dispatch(accessToken(env.ACCESS_TOKEN));
      history.push('/beranda');
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <FormTitle>{t('login')}</FormTitle>
        <FormGroup>
          <Label htmlFor="username">{t('username')}</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">{t('password')}</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <SubmitButton type="submit">{t('login')}</SubmitButton>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
`;

const LoginForm = styled.form`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 24px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: ${Colors.primary};
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.secondary};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 8px;
`;

export default Login;
