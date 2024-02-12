'use client';

import { ReactElement, useContext } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LANGUAGE_SETTINGS, LanguageContext } from '@/app/_language';
import { useTranslation } from '@/app/_translation';
import { HomeTranslation } from '../homeTranslation';

const languagesMap: Map<string, string> = new Map<string, string>([
  ['de', '🇩🇪 Deutch (DE)'],
  ['en', '🇬🇧 English (EN)'],
  ['es', '🇪🇸 Español (ES)'],
  ['fr', '🇫🇷 Français (FR)'],
  ['in', '🇮🇩 Bahasa Indonesia (IN)'],
  ['it', '🇮🇹 Italiano (IT)'],
  ['ja', '🇯🇵 日本語 (JA)'],
  ['ko', '🇰🇷 한국어 (KO)'],
  ['pt', '🇵🇹 Português (PT)'],
  ['tr', '🇹🇷 Türkçe (TR)'],
  ['ru', '🇷🇺 Русский (RU)'],
  ['uk', '🇺🇦 Українська (UK)'],
  ['vi', '🇻🇳 Tiếng Việt (VI)'],
  ['zh', '🇨🇳 中文 (ZH)']
]);

export const Header = (): ReactElement => {
  const [selectedLanguage, changeSelectedLanguage]: LanguageContext = useContext(LanguageContext);
  const { header: i18n }: HomeTranslation = useTranslation();

  return (
    <Navbar expand='lg' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='/'>{i18n.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls='main-nav' />
        <Navbar.Collapse id='main-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#about'>{i18n.about}</Nav.Link>
            <Nav.Link href='#program'>{i18n.program}</Nav.Link>
            <Nav.Link href='#speakers'>{i18n.speakers}</Nav.Link>
            <Nav.Link href='#tickets'>{i18n.tickets}</Nav.Link>
            <Nav.Link href='#sponsors'>{i18n.sponsors}</Nav.Link>
            {LANGUAGE_SETTINGS.availableLanguages.length > 1 && (
              <NavDropdown className='bg-opacity-10' title={`${selectedLanguage.toUpperCase()}`} id='translation-dropdown'>
                {LANGUAGE_SETTINGS.availableLanguages.map((lang: string) => (
                  <NavDropdown.Item as='button' onClick={() => changeSelectedLanguage(lang)} key={lang}>
                    {languagesMap.get(lang)}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
