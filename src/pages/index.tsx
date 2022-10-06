import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import logo from '../../static/img/logo.png';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={`${siteConfig.title}`}>
      <main className={styles.main}>
        <img className={styles.logo} src={logo} alt="tun-logo" />
        <div className={styles.desc}>{siteConfig.title}</div>
        <a target="_blank" rel="noreferrer" href="https://github.com/tuntun0609/bilibil-tool-mv3" className="repo-list-item">
          <img alt="bilibil-tool-mv3" src="https://tun-github-readme-stats.vercel.app/api/pin/?username=tuntun0609&repo=bilibil-tool-mv3" />
        </a>
      </main>
    </Layout>
  );
}
