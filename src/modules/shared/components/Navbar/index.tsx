import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { MoviesRoutePaths } from '../../../views/movie/config/routes';
import { MyListRoutePaths } from '../../../views/favorite/config/routes';
import { ContactUsRoutePaths } from '../../../views/contact/config/routes';
import { LoginRoutePaths } from '../../../views/auth/config/routes';
import { Colors } from '../../styles/Colors';
import { InlineList } from '../../styles/InlineList';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../../views/auth/store/actions/loginActions';

export const Navbar: React.FC = () => {
  const { t } = useTranslation(['menu']);
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((state: any) => state.login.accessToken?.token);

  const handleLogout = () => {
    dispatch(deleteToken());
    history.replace('/login');
  };


  return (
    <MenuContainer>
    <InlineList>
      {accessToken ? (
        <>
          <li>
            <CustomLink to={MoviesRoutePaths.Home}>{t('home')}</CustomLink>
          </li>
          <li>
            <CustomLink to={MyListRoutePaths.MyList}>{t('myList')}</CustomLink>
          </li>
          <li>
            <LogoutLink onClick={handleLogout}>{t('logout')}</LogoutLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <CustomLink to={LoginRoutePaths.Login}>{t('login')}</CustomLink>
          </li>
          <li>
            <CustomLink to={ContactUsRoutePaths.ContactUs}>{t('contactUs')}</CustomLink>
          </li>
        </>
      )}
    </InlineList>
  </MenuContainer>
  );
};

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CustomLink = styled(Link)`
  color: ${Colors.black};
  text-decoration: none;
  display: inline-block;
  padding: 10px;

  &:hover {
    color: ${Colors.white};
    background: ${Colors.secondary};
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const LogoutLink = styled.button`
  color: ${Colors.black};
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: ${Colors.white};
    background: ${Colors.secondary};
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;