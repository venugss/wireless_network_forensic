
import React from 'react';
import Layout from '@/components/Layout';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="container max-w-4xl px-4 py-10 md:py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
          <p className="lead">
            This Privacy Policy describes how WiNetForensic ("we," "us," or "our") collects, uses, 
            and discloses your information when you use our Integrated Wireless Network Forensic Analysis Framework
            (the "Service").
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            Our forensic analysis framework is designed to analyze network data that you explicitly upload 
            or connect to our service. This may include:
          </p>
          <ul>
            <li>Network packet capture files</li>
            <li>System logs and network flow data</li>
            <li>IP addresses, MAC addresses, and other network identifiers</li>
            <li>Communication metadata and traffic patterns</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Perform the network forensic analysis requested by you</li>
            <li>Generate reports and visualizations based on the uploaded data</li>
            <li>Improve our analysis algorithms and detection capabilities</li>
            <li>Respond to your requests and provide customer support</li>
          </ul>
          
          <h2>Data Security and Retention</h2>
          <p>
            We implement appropriate security measures to protect your data against unauthorized access, 
            alteration, disclosure, or destruction. Your data is stored only for the time necessary to 
            provide you with the service and can be deleted at your request at any time.
          </p>
          <p>
            By default, we retain analysis data for 30 days unless you configure different retention 
            settings in your account preferences.
          </p>
          
          <h2>Data Sharing</h2>
          <p>
            We do not sell or rent your data to third parties. We may share anonymized and aggregated 
            statistical data to improve our detection algorithms, but this data cannot be used to 
            identify specific networks or systems.
          </p>
          
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have rights regarding your data, including:</p>
          <ul>
            <li>Access to your data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
          </ul>
          
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the effective date.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <a href="mailto:privacy@winetforensic.com">privacy@winetforensic.com</a>
          </p>
          
          <p className="text-sm text-muted-foreground mt-10">
            Last updated: May 21, 2025
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
