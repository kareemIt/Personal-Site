import React from 'react';

const EmailBuddy = () => {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', maxWidth: 640, margin: '60px auto', padding: '0 24px', color: '#111' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>EmailBuddy</h1>
      <p style={{ color: '#555', lineHeight: 1.6 }}>Take control of your inbox.</p>
      <p style={{ color: '#555', lineHeight: 1.6 }}>EmailBuddy is an iOS app that helps you clean up, organize, and manage your Gmail inbox using AI-powered insights.</p>
      <h2>Features</h2>
      <ul style={{ color: '#555', lineHeight: 2 }}>
        <li>AI sender classification — identify newsletters, spam, and low-value senders</li>
        <li>Bulk cleanup — trash, archive, or mark emails as read in one tap</li>
        <li>Inbox health score — see how cluttered your inbox really is</li>
        <li>One-tap unsubscribe — get off mailing lists automatically</li>
      </ul>
      <h2>Contact</h2>
      <p><a href="mailto:kareem.itani2@gmail.com" style={{ color: '#007AFF', textDecoration: 'none' }}>kareem.itani2@gmail.com</a></p>
      <footer style={{ marginTop: 60, fontSize: '0.85rem', color: '#999' }}>
        <a href="/emailbuddy/privacy" style={{ color: '#007AFF', textDecoration: 'none' }}>Privacy Policy</a>
      </footer>
    </div>
  );
};

export default EmailBuddy;
