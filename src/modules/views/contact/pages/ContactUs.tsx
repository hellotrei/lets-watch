import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';


const ContactUs: React.FC = () => {
  const { t } = useTranslation(['contactUs']);

  return (
    <Container>
      <Section>
        <SectionTitle>{t('contactInformation')}</SectionTitle>
        <ContactInfo>
          <ContactItem>
            <ContactIcon className="fa-solid fa-envelope" />
            <ContactText>example@example.com</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon className="fa-solid fa-phone" />
            <ContactText>+1 234 567 890</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon className="fa-brands fa-map-marker-alt" />
            <ContactText>123 Main St, City, Country</ContactText>
          </ContactItem>
        </ContactInfo>
      </Section>
      <Section>
        <SectionTitle>{t('sendUsAMessage')}</SectionTitle>
        <ContactForm>
          <FormGroup>
            <Label htmlFor="name">{t('yourName')}</Label>
            <Input type="text" id="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">{t('yourEmail')}</Label>
            <Input type="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">{t('message')}</Label>
            <TextArea id="message" rows={5} />
          </FormGroup>
          <SubmitButton type="submit">{t('sendMessage')}</SubmitButton>
        </ContactForm>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ContactInfo = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ContactIcon = styled.i`
  font-size: 16px;
  margin-right: 8px;
`;

const ContactText = styled.p`
  font-size: 16px;
`;

const ContactForm = styled.form``;

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

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #e91e63;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d81b60;
  }
`;

export default ContactUs;
