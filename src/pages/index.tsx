import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const features = [
  {
    emoji: '🎨',
    title: 'Live CSS Theming',
    description: 'Change your brand colours in real-time from the Super Admin panel. Eight built-in presets — no rebuild needed, ever.',
  },
  {
    emoji: '💳',
    title: 'KES Billing via Paystack',
    description: 'Three subscription tiers (Basic KES 50 · Pro KES 100 · Admin KES 200/mo) with a KES wallet for auto-renewal.',
  },
  {
    emoji: '🔔',
    title: 'Web Push Notifications',
    description: 'VAPID-based browser push notifications — alert users about server status, billing, and announcements.',
  },
  {
    emoji: '⚙',
    title: '9-Tab Super Admin',
    description: 'Full control panel: Branding, Appearance, Email, Billing, Users, Revenue, Push, Docs, and Support.',
  },
  {
    emoji: '🛡',
    title: 'Email Spam Protection',
    description: '6-layer email validation: domain allowlist, Gmail format rules, 30+ fake prefix blocks, and live MX DNS verification.',
  },
  {
    emoji: '🚀',
    title: 'One-Click Server Provisioning',
    description: 'Users deploy game servers directly from their dashboard. Automatic Wings integration via billing.',
  },
];

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.ghostAnimation}>👻</div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title} <span className={styles.hosting}>Hosting</span>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx('hero__buttons', styles.buttons)}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started →
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/panel/introduction">
            Panel Docs
          </Link>
          <Link className="button button--secondary button--lg" href="https://github.com/Casper-Tech-ke">
            GitHub ↗
          </Link>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.stat}><span className={styles.statNum}>3</span><span className={styles.statLabel}>Repos</span></div>
          <div className={styles.stat}><span className={styles.statNum}>18</span><span className={styles.statLabel}>Eggs</span></div>
          <div className={styles.stat}><span className={styles.statNum}>9</span><span className={styles.statLabel}>Admin Tabs</span></div>
          <div className={styles.stat}><span className={styles.statNum}>KES</span><span className={styles.statLabel}>Billing</span></div>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Everything you need to run a hosting business
        </Heading>
        <p className={styles.sectionSubtitle}>
          XCASPER is a complete game server hosting platform — panel, Wings nodes, billing, and documentation — all in one.
        </p>
        <div className={clsx('row', styles.featureGrid)}>
          {features.map((f, i) => (
            <div key={i} className={clsx('col col--4', styles.featureCol)}>
              <div className={styles.featureCard}>
                <div className={styles.featureEmoji}>{f.emoji}</div>
                <Heading as="h3" className={styles.featureTitle}>{f.title}</Heading>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaCard}>
          <Heading as="h2">Ready to deploy?</Heading>
          <p>Follow our step-by-step guide to get XCASPER Panel running in under 30 minutes.</p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/panel/installation">
              Start Installation →
            </Link>
            <Link className="button button--secondary button--lg" href="https://t.me/casper_tech_ke">
              💬 Get Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Documentation" description={siteConfig.tagline}>
      <Hero />
      <main>
        <FeaturesSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
