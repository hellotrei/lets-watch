import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../../assets/images/logo.svg';
import { Navbar } from '../Navbar';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} className="watch-later-logo" alt="logo" />
      </LogoContainer>
      <NavbarContainer>
        <Navbar />
        <LanguageSelector>
          <DropdownToggle onClick={toggleDropdown}>
            {selectedLanguage === 'en' ? '🇺🇸' : '🇮🇩'}
            <DropdownIcon className={dropdownOpen ? 'open' : ''}>
              ▼
            </DropdownIcon>
          </DropdownToggle>
          {dropdownOpen && (
            <DropdownMenu>
              <DropdownItem onClick={() => changeLanguage('en')}>
                🇺🇸 English
              </DropdownItem>
              <DropdownItem onClick={() => changeLanguage('id')}>
                🇮🇩 Indonesian
              </DropdownItem>
            </DropdownMenu>
          )}
        </LanguageSelector>
      </NavbarContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  img {
    width: 100px;
    height: auto;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageSelector = styled.div`
  position: relative;
  margin-left: 16px;
`;

const DropdownToggle = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  background: none;
  border: none;
`;

const DropdownIcon = styled.span`
  margin-left: 4px;
  font-size: 14px;
  transform: rotate(0deg);
  transition: transform 0.2s;
  &.open {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  min-width: 120px;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  cursor: pointer;
  padding: 4px 8px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export default Header;
