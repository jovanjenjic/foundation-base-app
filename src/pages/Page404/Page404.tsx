import React from 'react';
import styles from './Page404.module.scss';
import Button from '@mui/material/Button';
import cn from 'classnames';

const Page404 = ({ goBackTo = '/' }) => {
  return (
    <div className={styles.container}>
      <div className={styles['text-wrapper']}>
        <div className={styles['bold-text']}>404 - Page Not Found</div>
        <div className={styles.title}>Something went wrong</div>
        <div className={styles.subtitle}>
          Uh-oh, seems like you've ventured into uncharted territory!
        </div>
        <div className={styles['content-text']}>
          It appears that the page you were looking for has taken a detour or
          decided to go on a vacation. Don't worry, though! Our digital compass
          is already hard at work trying to locate it. In the meantime – there
          are a few ways we can help you get back on track:
        </div>
        <div className={styles['number-text']}>
          <div className={styles['number-text__bold--number']}>1.</div>
          <div
            className={cn(styles['number-text'], styles['number-text__bold'])}
          >
            Double-Check the URL:
          </div>{' '}
          It's possible a minor typo or a digital hiccup led you astray. Recheck
          the URL to make sure it's accurate.
        </div>
        <div className={styles['number-text']}>
          <div className={styles['number-text__bold--number']}>2.</div>
          <div className={styles['number-text__bold']}>Head Home:</div> Return
          to our welcoming digital abode by hitting button below and rediscover
          what we have to offer.
        </div>
        <div className={styles['number-text']}>
          <div className={styles['number-text__bold--number']}>3.</div>
          <div className={styles['number-text__bold']}>
            Report the Issue:
          </div>{' '}
          If you suspect there's a digital glitch or a map misplacement, let us
          know! Use email
          <div className={styles['number-text__link']}>
            {' '}
            support@gonina.com{' '}
          </div>
          to report the issue, and our tech wizards will investigate.
        </div>
      </div>
      <div className={styles['button-wrapper']}>
        <Button
          href={goBackTo}
          variant="contained"
          size="large"
          className={styles.button}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default Page404;
