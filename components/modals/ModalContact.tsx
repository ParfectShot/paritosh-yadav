'use client';

import styles from '@components/modals/ModalAlert.module.scss';

import * as React from 'react';

import { useModals } from '@components/page/ModalContext';

import Button from '@components/Button';
import Card from '@components/Card';

interface SocialLink {
  platform: string;
  url: string;
  label: string;
  isEmail?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'Email',
    url: 'mailto:prtshydv@gmail.com',
    label: 'prtshydv@gmail.com',
    isEmail: true
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/parfectshot/',
    label: 'Paritosh Yadav'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/ParfectShot',
    label: 'ParfectShot'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/twospiritedpenguin/',
    label: 'twospiritedpenguin'
  }
];

const ContactModal = () => {
  const { close } = useModals();

  return (
    <div className={styles.root}>
      <Card title="Contact">
        <div className="flex flex-col justify-center items-center gap-4">
          {socialLinks.map(({ platform, url, label, isEmail }) => (
            <div key={platform}>
              <strong>{platform}:</strong>{' '}
              <a className="underline underline-offset-1 hover:text-blue-500" href={url} target={isEmail ? undefined : '_blank'} rel={isEmail ? undefined : 'noopener noreferrer'}>
                {label} <span aria-hidden="true">↗</span>
              </a>
            </div>
          ))}
        </div>
        <br />
        <br />
        <Button onClick={() => close()}>Close</Button>
      </Card>
    </div>
  );
};

export default ContactModal;