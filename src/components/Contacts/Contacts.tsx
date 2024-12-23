import PageContainer from '../ui-kit/PageContainer/PageContainer';
import { getDictionary } from '../../consts/dictionary';
import style from './style.module.css';
import { contactLinks } from '../../consts/consts';
import React from 'react';

const Contacts = () => {
  return (
    <PageContainer hash="contacts" isSingle={false} isDecore={false}>
      <h4>{getDictionary('contactsTitle')}</h4>
      <div className={style.contacts}>
        <menu className={style.menu}>
          {contactLinks.map((link) => (
            <li key={link.id} className={style.contactItem}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
              {React.createElement(link.icon, { className: style.icon })}
              </a>
              <p>{link.title}</p>
            </li>
          ))}
        </menu>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091454!2d-122.42159468468136!3d37.77492977975837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1f5f6e47%3A0x1c3f6c59e61c9aa4!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1690123456789!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </PageContainer>
  );
};

export default Contacts;
