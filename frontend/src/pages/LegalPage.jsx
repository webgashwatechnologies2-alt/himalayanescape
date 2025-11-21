import React from 'react';

const LegalPage = ({ title, content }) => {
  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{title}</h1>
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    content={
      <div className="text-slate-600 space-y-6">
        <p>Last updated: January 2024</p>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you make a booking, 
            contact us, or use our services. This may include your name, email address, 
            phone number, and travel preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to process your bookings, communicate with you 
            about your tours, and improve our services. We may also use your information to 
            send you promotional materials, but only with your consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share 
            your information with service providers who help us operate our business, such as 
            hotels and transportation providers, but only to the extent necessary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information 
            from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at 
            info@himalayanescape.com
          </p>
        </section>
      </div>
    }
  />
);

export const Terms = () => (
  <LegalPage
    title="Terms & Conditions"
    content={
      <div className="text-slate-600 space-y-6">
        <p>Last updated: January 2024</p>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Booking Terms</h2>
          <p>
            All bookings are subject to availability and confirmation. A deposit is required 
            to confirm your booking, with the balance due as specified in your booking confirmation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Cancellation Policy</h2>
          <p>
            Cancellations must be made in writing. Cancellation charges apply as per the 
            timeline specified in your booking agreement. Please refer to our Refund Policy 
            for detailed information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Travel Documents</h2>
          <p>
            It is your responsibility to ensure you have all necessary travel documents, 
            including permits required for certain areas like Spiti Valley.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Health & Safety</h2>
          <p>
            Travelers must be in good health and physically fit for high-altitude destinations. 
            We recommend consulting a doctor before traveling to Spiti Valley and similar regions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Liability</h2>
          <p>
            While we strive to ensure your safety and satisfaction, Himalayan Escape is not 
            liable for unforeseen circumstances, natural disasters, or third-party service failures.
          </p>
        </section>
      </div>
    }
  />
);

export const RefundPolicy = () => (
  <LegalPage
    title="Refund Policy"
    content={
      <div className="text-slate-600 space-y-6">
        <p>Last updated: January 2024</p>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Cancellation Charges</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>More than 30 days before departure: 10% of package cost</li>
            <li>15-30 days before departure: 25% of package cost</li>
            <li>7-14 days before departure: 50% of package cost</li>
            <li>Less than 7 days before departure: 100% of package cost (No refund)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Refund Processing</h2>
          <p>
            Approved refunds will be processed within 10-15 business days to the original 
            payment method. Bank processing times may vary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Force Majeure</h2>
          <p>
            In cases of natural disasters, political unrest, or other force majeure events, 
            we will work with you to reschedule or provide alternative arrangements. Refund 
            terms may vary in such circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Modification Charges</h2>
          <p>
            Changes to confirmed bookings may incur additional charges depending on the 
            nature and timing of the modification.
          </p>
        </section>
      </div>
    }
  />
);

export const Disclaimer = () => (
  <LegalPage
    title="Disclaimer"
    content={
      <div className="text-slate-600 space-y-6">
        <p>Last updated: January 2024</p>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. General Information</h2>
          <p>
            The information provided on this website is for general informational purposes 
            only. While we strive to keep the information accurate and up-to-date, we make 
            no warranties about the completeness or reliability of the information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Third-Party Services</h2>
          <p>
            Our tours involve third-party service providers including hotels, transportation, 
            and activity operators. While we carefully select our partners, we are not 
            responsible for their actions or service quality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Travel Risks</h2>
          <p>
            Travel to mountainous regions involves inherent risks. Travelers participate at 
            their own risk and are responsible for their own health, safety, and insurance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Photography & Media</h2>
          <p>
            Photos and videos taken during tours may be used for promotional purposes. If you 
            do not wish to be included in such materials, please inform our staff.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Changes to Itinerary</h2>
          <p>
            We reserve the right to modify itineraries due to weather conditions, road closures, 
            or other unforeseen circumstances. Alternative arrangements of equal value will be 
            provided whenever possible.
          </p>
        </section>
      </div>
    }
  />
);

export default LegalPage;
