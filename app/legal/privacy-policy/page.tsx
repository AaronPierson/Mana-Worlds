
import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
    <p className="mb-4">
      We respect your privacy and are committed to protecting it. This privacy policy explains what information we collect on our website and how we use it.
    </p>
    <p className="mb-4">
      We use Umami, a privacy-focused web analytics solution, to understand how our website is used. Umami collects anonymized data about your visits to our website, including the pages you view and the device you use. This helps us improve our website and provide a better user experience. Umami does not use cookies and does not collect any personal data.
    </p>
    <p className="mb-4">
      We do not share the information collected through Umami with third parties. If you have any questions about our privacy practices, please contact us.
    </p>
  </div>

  );
};

export default PrivacyPolicyPage;
