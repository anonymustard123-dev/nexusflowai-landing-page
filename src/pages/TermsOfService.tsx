import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last Updated: January 31, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By creating an account, accessing, or using the "NexusFlowAI" platform (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms constitute a legally binding agreement between you ("User," "Subscriber," or "you") and <strong>NexusFlowAI</strong> ("Company," "we," "us," or "our"), operating out of New York, NY.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NexusFlowAI is a Customer Relationship Management (CRM) and productivity platform enhanced by Artificial Intelligence. The Service is designed to assist independent sales professionals, business owners, and contractors in managing contacts, optimizing workflows, and organizing business data.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Contact and pipeline management.</li>
              <li>AI-powered voice processing for data entry and retrieval.</li>
              <li>Business performance analytics.</li>
              <li>A referral affiliate program for authorized users.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility & Account Security</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Age Requirement:</strong> You must be at least 18 years of age to access or use the Service.</li>
              <li><strong>Professional Use:</strong> You represent that you are using the Service for professional or business purposes.</li>
              <li><strong>Account Security:</strong> You are responsible for safeguarding your login credentials. You agree to notify us immediately of any unauthorized access to your account. We are not liable for any loss or damage arising from your failure to protect your account information.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription & Billing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The Service is offered on a recurring subscription basis.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Subscription Fees:</strong> The current subscription fee is <strong>$20.00 USD per month</strong>. We reserve the right to modify pricing with reasonable prior notice.</li>
              <li><strong>Payment Authorization:</strong> By providing a payment method, you authorize us (via our third-party payment processor, Stripe) to charge the applicable subscription fees automatically on a recurring monthly basis until you cancel.</li>
              <li><strong>Cancellation Policy:</strong> You may cancel your subscription at any time through your account settings. Cancellation requests will take effect at the end of the current billing cycle.</li>
              <li><strong>Refund Policy:</strong> All payments are final and non-refundable. We do not provide refunds or credits for partially used subscription periods.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Affiliate Referral Program</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NexusFlowAI offers a referral program (the "Program") allowing active subscribers to earn rewards for referring new users.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Eligibility:</strong> Participation is limited to active, paid subscribers in good standing.</li>
              <li><strong>Referral Rewards:</strong> You are eligible to earn a referral fee (currently $10.00 USD) for each new user who subscribes to the Service via your unique referral link and completes a verified payment.</li>
              <li><strong>Payouts:</strong> Rewards are tracked within your user dashboard. Payouts are processed via third-party payment services (e.g., Venmo, CashApp, PayPal, Zelle) based on the information you provide. We reserve the right to review and withhold payouts in cases of suspected fraud, abuse, or self-referral.</li>
              <li><strong>Independent Contractor Relationship:</strong> Your participation in the Program is solely as an independent contractor. Nothing in these Terms creates an employment, partnership, or agency relationship between you and NexusFlowAI. You are solely responsible for reporting and paying all applicable taxes on any earnings received.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Conduct & Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to use the Service in compliance with all applicable laws and regulations.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Third-Party Agreements:</strong> If you are affiliated with any external organization, corporation, or sales entity, you agree that your use of this Service complies with all policies, procedures, and contracts of that third party. NexusFlowAI accepts no liability for your failure to adhere to the internal rules of other organizations.</li>
              <li><strong>Prohibited Activities:</strong> You agree not to send unsolicited commercial communications (spam), upload illegal or harassing content, reverse engineer the Service, or resell the Service without consent.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Privacy & User Content</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Data Ownership:</strong> You retain ownership of the data, contacts, and information you input into the Service ("User Data").</li>
              <li><strong>Role of Parties:</strong> With respect to User Data containing personal information of third parties (e.g., your clients or leads), you acknowledge that you are the "Controller" and NexusFlowAI is the "Processor" of such data.</li>
              <li><strong>Compliance:</strong> You warrant that you have obtained all necessary consents and permissions to store and process the personal information of your contacts in this Service.</li>
              <li><strong>Communication Laws:</strong> You are strictly prohibited from using the Service to violate the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, or similar regulations. You bear sole liability for any communications made to contacts stored within your account.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. AI Technology Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Service utilizes artificial intelligence technologies (including third-party Large Language Models) to process data and generate outputs.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Accuracy:</strong> AI-generated outputs may occasionally be inaccurate, incomplete, or misleading. You agree to independently verify all critical information, including but not limited to meeting times, transaction records, and contact details.</li>
              <li><strong>Voice Data:</strong> By using voice-enabled features, you consent to the processing of voice recordings to generate transcripts and actionable data.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed uppercase font-semibold">The Service is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
            <p className="text-gray-700 leading-relaxed mt-2">
              To the fullest extent permitted by law, NexusFlowAI disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no representation or warranty that the use of the Service will result in any specific business outcome, increased sales, or financial gain.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, NexusFlowAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total cumulative liability for any claims under these Terms shall not exceed the total amount paid by you to us during the twelve (12) month period immediately preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions regarding these Terms or the Service, please contact us at: <br />
              <strong>NexusFlowAI Administration</strong> <br />
              Email: <a href="mailto:admin@nexusflowapp.pro" className="text-primary hover:underline">admin@nexusflowapp.pro</a> <br />
              Location: New York, NY
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
