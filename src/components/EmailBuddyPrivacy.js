import React from 'react';

const EmailBuddyPrivacy = () => {
  const s = { color: '#555', lineHeight: 1.7 };
  const a = { color: '#007AFF', textDecoration: 'none' };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', maxWidth: 640, margin: '60px auto', padding: '0 24px', color: '#111' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>EmailBuddy – Privacy Policy</h1>
      <p style={s}>This privacy policy applies to the EmailBuddy app (hereby referred to as "Application") for mobile devices that was created by Kareem Itani (hereby referred to as "Service Provider") as a Commercial service. This service is intended for use "AS IS".</p>

      <h2>Gmail Data Access</h2>
      <p style={s}>The Application connects to your Gmail account to provide its core features. Specifically, the Application accesses:</p>
      <ul style={s}>
        <li>Email metadata (sender, subject, date, read/unread status, and snippet) to display inbox summaries and calculate your inbox health score</li>
        <li>Email body content, processed transiently by AI to classify senders and identify newsletters, spam, and low-value emails. Email content is never stored on our servers after processing.</li>
        <li>The List-Unsubscribe header of emails to send unsubscribe requests on your behalf when you choose to unsubscribe from a sender</li>
      </ul>
      <p style={s}>Gmail data is used solely to provide the Application's features. It is never used for advertising, and it is never sold or shared with third parties. The Application's use of Gmail data complies with the <a href="https://developers.google.com/terms/api-services-user-data-policy" style={a}>Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
      <p style={s}>You can revoke the Application's access to your Gmail account at any time by visiting <a href="https://myaccount.google.com/permissions" style={a}>myaccount.google.com/permissions</a>.</p>

      <h2>Information Collection and Use</h2>
      <p style={s}>The Application collects information when you download and use it. This information may include:</p>
      <ul style={s}>
        <li>Your device's Internet Protocol address (e.g. IP address)</li>
        <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
        <li>The time spent on the Application</li>
        <li>The operating system you use on your mobile device</li>
      </ul>
      <p style={s}>The Application does not gather precise information about the location of your mobile device.</p>
      <p style={s}>The Application uses Artificial Intelligence (AI) technologies to enhance user experience and provide certain features. The AI components may process user data to deliver personalized content, recommendations, or automated functionalities. All AI processing is performed in accordance with this privacy policy and applicable laws.</p>

      <h2>Third Party Access</h2>
      <p style={s}>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Application utilizes third-party services that have their own Privacy Policy:</p>
      <ul style={s}>
        <li><a href="https://expo.dev/privacy" style={a}>Expo</a></li>
        <li><a href="https://www.revenuecat.com/privacy" style={a}>RevenueCat</a></li>
      </ul>
      <p style={s}>The Service Provider may disclose User Provided and Automatically Collected Information as required by law, to protect rights or safety, or with trusted service providers who adhere to this privacy statement.</p>

      <h2>Opt-Out Rights</h2>
      <p style={s}>You can stop all collection of information by the Application easily by uninstalling it.</p>

      <h2>Data Retention Policy</h2>
      <p style={s}>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. To request deletion, contact <a href="mailto:kareem.itani2@gmail.com" style={a}>kareem.itani2@gmail.com</a>.</p>

      <h2>Children</h2>
      <p style={s}>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age.</p>

      <h2>Security</h2>
      <p style={s}>The Service Provider provides physical, electronic, and procedural safeguards to protect information it processes and maintains.</p>

      <h2>Changes</h2>
      <p style={s}>This Privacy Policy may be updated from time to time. You are advised to consult this Privacy Policy regularly for any changes. This privacy policy is effective as of 2026-02-28.</p>

      <h2>Your Consent</h2>
      <p style={s}>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>

      <h2>Contact Us</h2>
      <p style={s}>If you have any questions regarding privacy, please contact the Service Provider via email at <a href="mailto:kareem.itani2@gmail.com" style={a}>kareem.itani2@gmail.com</a>.</p>
    </div>
  );
};

export default EmailBuddyPrivacy;
