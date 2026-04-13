import React from 'react';

const s = {
  page: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', maxWidth: 640, margin: '60px auto', padding: '0 24px', color: '#111' },
  h1: { fontSize: '2rem', marginBottom: 8, marginTop: 0 },
  h2: { fontSize: '1.2rem', fontWeight: 700, marginTop: 36, marginBottom: 8 },
  body: { color: '#555', lineHeight: 1.75, marginBottom: 12 },
  steps: { color: '#555', lineHeight: 2.1, paddingLeft: 20 },
  note: { backgroundColor: '#FFF8E1', border: '1px solid #FFE082', borderRadius: 10, padding: '16px 20px', marginTop: 24, marginBottom: 24 },
  noteText: { color: '#7A5800', lineHeight: 1.7, margin: 0, fontSize: '0.93rem' },
  link: { color: '#007AFF', textDecoration: 'none' },
  footer: { marginTop: 60, paddingTop: 24, borderTop: '1px solid #E8E8E8', fontSize: '0.85rem', color: '#999', display: 'flex', gap: 20 },
};

const EmailBuddyDeleteAccount = () => {
  return (
    <div style={s.page}>
      <h1 style={s.h1}>EmailBuddy — Delete Your Account</h1>
      <p style={s.body}>
        You can permanently delete your EmailBuddy account and all associated data directly from the app.
        No need to contact support.
      </p>

      <h2 style={s.h2}>How to delete your account</h2>
      <ol style={s.steps}>
        <li>Open the EmailBuddy app on your iPhone</li>
        <li>Tap the <strong>Profile</strong> tab (bottom right)</li>
        <li>Scroll to the bottom of the page</li>
        <li>Tap <strong>Delete Account</strong></li>
        <li>Confirm the prompt — your account will be deleted immediately</li>
      </ol>

      <div style={s.note}>
        <p style={s.noteText}>
          <strong>Note:</strong> Account deletion is permanent and cannot be undone. Make sure you want to proceed before confirming.
        </p>
      </div>

      <h2 style={s.h2}>What gets deleted</h2>
      <p style={s.body}>When you delete your account, the following data is permanently removed from our servers:</p>
      <ul style={s.steps}>
        <li>Your email address, name, and account credentials</li>
        <li>All linked Gmail and Outlook accounts</li>
        <li>OAuth tokens and access credentials</li>
        <li>Inbox scan history and metrics</li>
        <li>AI sender insights and sender statistics</li>
        <li>Cleanup job history</li>
        <li>Automation rules</li>
        <li>Subscription records</li>
        <li>Push notification tokens</li>
      </ul>

      <h2 style={s.h2}>What is retained</h2>
      <p style={s.body}>
        Anonymised analytics events (such as paywall views) may be retained for internal reporting purposes.
        These records contain no personally identifiable information after your account is deleted.
      </p>

      <h2 style={s.h2}>Gmail and Outlook access</h2>
      <p style={s.body}>
        Deleting your account removes EmailBuddy's stored tokens. To fully revoke access from Google's side,
        visit <a href="https://myaccount.google.com/permissions" style={s.link}>myaccount.google.com/permissions</a> and
        remove EmailBuddy. For Outlook, visit <a href="https://account.live.com/consent/Manage" style={s.link}>account.live.com/consent/Manage</a>.
      </p>

      <h2 style={s.h2}>Need help?</h2>
      <p style={s.body}>
        If you are unable to access the app and need your account deleted manually, contact us at{' '}
        <a href="mailto:kareem.itani2@gmail.com" style={s.link}>kareem.itani2@gmail.com</a> and we will process the request within 7 days.
      </p>

      <footer style={s.footer}>
        <a href="/emailbuddy" style={s.link}>EmailBuddy</a>
        <a href="/emailbuddy/privacy" style={s.link}>Privacy Policy</a>
        <a href="mailto:kareem.itani2@gmail.com" style={s.link}>kareem.itani2@gmail.com</a>
      </footer>
    </div>
  );
};

export default EmailBuddyDeleteAccount;
