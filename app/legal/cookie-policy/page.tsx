
import Head from 'next/head';

export default function CookiePolicy() {
  return (
    <div>
      <Head>
        <title>Cookie Policy</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="mb-4">
          We use cookies to improve your experience on our site and to show you personalized advertising.
        </p>
        <h2 className="text-xl font-bold mb-2">What are cookies?</h2>
        <p className="mb-4">
          Cookies are small text files that are stored on your device when you visit a website. They are used to remember
          your preferences and to track your activity on the site.
        </p>
        <h2 className="text-xl font-bold mb-2">How do we use cookies?</h2>
        <p className="mb-4">
          We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We
          also share information about your use of our site with our social media, advertising and analytics partners who
          may combine it with other information that you’ve provided to them or that they’ve collected from your use of
          their services.
        </p>
        <h2 className="text-xl font-bold mb-2">How can you control cookies?</h2>
        <p className="mb-4">
          You can control cookies by adjusting your browser settings. However, please note that disabling cookies may
          affect your experience on our site and other websites.
        </p>
      </div>
    </div>
  );
}
