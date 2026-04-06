import React, { useState } from 'react';

const styles = {
  page: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', maxWidth: 680, margin: '60px auto', padding: '0 24px', color: '#111' },
  hero: { marginBottom: 56 },
  badge: { display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#007AFF', backgroundColor: '#EAF3FF', borderRadius: 20, padding: '4px 12px', marginBottom: 16 },
  h1: { fontSize: '2.6rem', fontWeight: 700, lineHeight: 1.15, marginBottom: 16, marginTop: 0 },
  subtitle: { fontSize: '1.15rem', color: '#444', lineHeight: 1.7, marginBottom: 28 },
  ctaButton: { display: 'inline-block', backgroundColor: '#007AFF', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 12, fontWeight: 600, fontSize: '1rem' },
  section: { marginBottom: 56 },
  h2: { fontSize: '1.4rem', fontWeight: 700, marginBottom: 16, marginTop: 0 },
  bodyText: { color: '#444', lineHeight: 1.8, marginBottom: 12 },
  featureGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 8 },
  featureCard: { backgroundColor: '#F7F7F8', borderRadius: 14, padding: '20px 20px' },
  featureTitle: { fontWeight: 700, fontSize: '0.95rem', marginBottom: 6, marginTop: 0 },
  featureDesc: { color: '#555', fontSize: '0.9rem', lineHeight: 1.65, marginTop: 0 },
  list: { color: '#444', lineHeight: 2.1, paddingLeft: 20 },
  faqItem: { borderTop: '1px solid #E8E8E8', paddingTop: 18, paddingBottom: 18 },
  faqQuestion: { fontWeight: 600, fontSize: '0.98rem', marginBottom: 8, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  faqAnswer: { color: '#555', lineHeight: 1.75, fontSize: '0.93rem', marginTop: 0 },
  footer: { marginTop: 60, paddingTop: 24, borderTop: '1px solid #E8E8E8', fontSize: '0.85rem', color: '#999', display: 'flex', gap: 20 },
  link: { color: '#007AFF', textDecoration: 'none' },
};

const faqs = [
  {
    q: 'Is EmailBuddy free?',
    a: 'Yes — EmailBuddy is free to download and try. A Pro subscription unlocks unlimited cleanup and advanced AI features.',
  },
  {
    q: 'Does EmailBuddy work with Gmail?',
    a: 'Yes. EmailBuddy is built specifically for Gmail on iPhone. Connect your Google account in seconds using secure OAuth login.',
  },
  {
    q: 'Is my email data safe?',
    a: 'EmailBuddy uses Gmail\'s official API and never stores your emails on our servers. Your Gmail credentials are never shared. OAuth tokens are stored securely on your device using iOS Keychain encryption.',
  },
  {
    q: 'Does EmailBuddy actually delete emails?',
    a: 'Only when you tell it to. EmailBuddy shows you what it found and you confirm before anything is moved or deleted.',
  },
  {
    q: 'What\'s the best way to clean up a Gmail inbox on iPhone?',
    a: 'The fastest way is to use an AI-powered app like EmailBuddy that classifies senders in bulk and lets you clean up entire categories at once — rather than deleting emails one at a time.',
  },
  {
    q: 'How is EmailBuddy different from other email apps?',
    a: 'Most email apps (Gmail, Spark, Airmail) are built for reading and sending. EmailBuddy is built specifically for cleaning your inbox — AI classification, bulk actions, and inbox health tracking are the core features, not afterthoughts.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {faqs.map((item, i) => (
        <div key={i} style={styles.faqItem}>
          <div style={styles.faqQuestion} onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span style={{ color: '#007AFF', fontSize: '1.2rem' }}>{open === i ? '−' : '+'}</span>
          </div>
          {open === i && <p style={styles.faqAnswer}>{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

const EmailBuddy = () => {
  return (
    <div style={styles.page}>

      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.badge}>iOS App</div>
        <h1 style={styles.h1}>The AI-powered Gmail cleaner for iPhone.</h1>
        <p style={styles.subtitle}>
          EmailBuddy connects to your Gmail account and uses AI to identify clutter, bulk-delete junk,
          and help you reach inbox zero — in minutes, not hours.
        </p>
        <a href="https://apps.apple.com/us/app/emailbuddy-clean-inbox/id6759539281" style={styles.ctaButton}>Download on the App Store</a>
      </div>

      {/* Why */}
      <div style={styles.section}>
        <h2 style={styles.h2}>Why EmailBuddy?</h2>
        <p style={styles.bodyText}>
          Most people have thousands of unread emails. Newsletters they never read. Promotional senders
          they forgot they signed up for. Receipts from 2019.
        </p>
        <p style={styles.bodyText}>
          EmailBuddy scans your Gmail inbox, classifies every sender with AI, and lets you clean it all
          up in one tap. No forwarding your email to a third-party service. No browser extension required.
          Just connect your Gmail account and go.
        </p>
      </div>

      {/* Features */}
      <div style={styles.section}>
        <h2 style={styles.h2}>Features</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <p style={styles.featureTitle}>AI Sender Classification</p>
            <p style={styles.featureDesc}>Automatically identifies newsletters, promotions, social notifications, and low-value senders so you know what's clogging your inbox.</p>
          </div>
          <div style={styles.featureCard}>
            <p style={styles.featureTitle}>Bulk Cleanup</p>
            <p style={styles.featureDesc}>Select a sender or category and trash, archive, or mark as read in one tap. Clean up hundreds of emails in seconds.</p>
          </div>
          <div style={styles.featureCard}>
            <p style={styles.featureTitle}>Inbox Health Score</p>
            <p style={styles.featureDesc}>A real-time score that reflects how cluttered your inbox is. Track your progress as you clean up over time.</p>
          </div>
          <div style={styles.featureCard}>
            <p style={styles.featureTitle}>One-Tap Unsubscribe</p>
            <p style={styles.featureDesc}>Get off mailing lists automatically. EmailBuddy detects unsubscribe links and handles them for you.</p>
          </div>
        </div>
      </div>

      {/* Who it's for */}
      <div style={styles.section}>
        <h2 style={styles.h2}>Who is EmailBuddy for?</h2>
        <ul style={styles.list}>
          <li>iPhone users with a Gmail account</li>
          <li>Anyone with 1,000+ unread emails who doesn't know where to start</li>
          <li>People who want inbox zero but don't have time to delete emails one by one</li>
          <li>Anyone tired of newsletters they never signed up for</li>
        </ul>
      </div>

      {/* Privacy callout */}
      <div style={{ ...styles.section, backgroundColor: '#F7F7F8', borderRadius: 16, padding: '24px 28px' }}>
        <h2 style={{ ...styles.h2, marginBottom: 8 }}>Built for privacy</h2>
        <p style={{ ...styles.bodyText, marginBottom: 0 }}>
          EmailBuddy uses Gmail's official OAuth API — your email password is never seen or stored.
          Tokens are encrypted on your device using iOS Keychain. Your email content is never persisted to our servers.
        </p>
      </div>

      {/* FAQ */}
      <div style={styles.section}>
        <h2 style={styles.h2}>Frequently Asked Questions</h2>
        <FAQ />
      </div>

      {/* CTA */}
      <div style={{ ...styles.section, textAlign: 'center', padding: '32px 0' }}>
        <h2 style={{ ...styles.h2, marginBottom: 12 }}>Ready to clean up your inbox?</h2>
        <p style={{ ...styles.bodyText, marginBottom: 24 }}>Download EmailBuddy free on the App Store.</p>
        <a href="https://apps.apple.com/us/app/emailbuddy-clean-inbox/id6759539281" style={styles.ctaButton}>Download Free</a>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <a href="mailto:kareem.itani2@gmail.com" style={styles.link}>kareem.itani2@gmail.com</a>
        <a href="/emailbuddy/privacy" style={styles.link}>Privacy Policy</a>
      </footer>

    </div>
  );
};

export default EmailBuddy;
