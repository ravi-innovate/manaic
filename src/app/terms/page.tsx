export const metadata = {
  title: 'Terms & Conditions - Manaic.in',
  description: 'Understand the legal terms before using our blog platform. Personal use only.',
};

const TermsPage = () => {
  return (
    <div className="container w-8/9 mt-16">
      <div className="">
        <h1 className="text-2xl font-bold md:text-4xl mb-2">Terms & Conditions</h1>
        <p className="text-[--secondary-text] text-sm mb-8">Last updated: July 11, 2025</p>

        <section className="space-y-8 text-[--primary-text] text-base leading-relaxed">
          <p>
            Welcome to <strong>manaic.in</strong>, a multi-niche blogging platform designed to empower readers through diverse content in technology, lifestyle, travel, education, and more. These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of our platform. By using manaic.in, you agree to these Terms in full. If you disagree with any part, please do not use our website.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">1. Eligibility</h2>
          <p>
            You must be at least 13 years of age to use this platform. By accessing the site, you confirm that you meet this requirement. Users under the age of majority in their jurisdiction should only use the site under the supervision of a parent or guardian.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">2. Account & Authentication</h2>
          <p>
            Some features require user authentication. You are responsible for safeguarding your login credentials and for any activity under your account. Account sharing, impersonation, or using another person’s credentials is strictly prohibited.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">3. Content Usage</h2>
          <ul className="list-disc pl-6">
            <li>
              All content, including text, images, media, and design, is owned or licensed by manaic.in and is protected under intellectual property laws.
            </li>
            <li>
              You may <strong>read and share content</strong> for personal, non-commercial use only, including sending links to friends, bookmarking articles, or referencing with proper credit.
            </li>
            <li>
              You may <strong>not</strong> republish, sell, copy, scrape, or otherwise redistribute content on any platform or medium for commercial purposes without prior written consent.
            </li>
            <li>
              AI training, web scraping, or automated downloading of our content is strictly prohibited.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[--main-text]">4. Community Guidelines</h2>
          <ul className="list-disc pl-6">
            <li>Respect all contributors and readers. Harassment, hate speech, or threats will not be tolerated.</li>
            <li>Do not post or distribute harmful, illegal, or plagiarized content.</li>
            <li>Comments or submissions must be your original work or properly attributed.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[--main-text]">5. Third-Party Content</h2>
          <p>
            Some content may include external links or be contributed by independent writers. Manaic.in is not responsible for the accuracy, legality, or practices of third-party sites or authors. Clicking external links is at your own discretion.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">6. Advertisements & Affiliates</h2>
          <p>
            We may display ads or affiliate links. These help us keep our platform accessible. We are not liable for the practices, quality, or truthfulness of third-party advertisers.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">7. Disclaimer of Warranties</h2>
          <p>
            All content is provided “as is” and “as available”. We do not guarantee that the platform will be error-free, uninterrupted, or free from viruses. Use the site at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, manaic.in and its team shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the site or any content therein.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">9. Termination</h2>
          <p>
            We reserve the right to suspend or delete accounts, remove content, or block access if you violate any of these Terms, engage in harmful behavior, or abuse the platform.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">10. Modifications to Terms</h2>
          <p>
            We may revise these Terms at any time. Updates will be posted on this page. It is your responsibility to review them periodically. Continued use of the site implies acceptance of the current Terms.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Legal proceedings shall be subject to the jurisdiction of courts located in India.
          </p>

          <h2 className="text-2xl font-semibold text-[--main-text]">12. Contact Information</h2>
          <p>
            For any questions, requests, or concerns about these Terms & Conditions, please contact us at:
          </p>
          <p className="mt-2 text-[#0000ff]">
            <a href="mailto:devinpixelhead@gmail.com" className="hover:underline">
              devinpixelhead@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
