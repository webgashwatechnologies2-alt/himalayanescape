import React, { useState } from 'react';
import { Mountain } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import EnquiryModal from '../components/EnquiryModal';
import { spitiPackages } from '../mock';

const SpitiPackages = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleEnquiry = (pkg) => {
    setSelectedPackage(pkg.name);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="text-teal-400" size={24} />
            <span className="text-teal-400 font-semibold">Spiti Valley Expeditions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Spiti Valley Packages</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Journey to the remote cold desert of India. Experience ancient monasteries, pristine lakes, and landscapes that take your breath away.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-700 font-medium">
              <strong>Important:</strong> Spiti Valley is a high-altitude destination (3,800m - 4,500m). Please ensure you're physically fit and consult your doctor before booking.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spitiPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} onEnquiry={handleEnquiry} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">About Spiti Valley</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Spiti Valley, often called "Little Tibet," is a cold desert mountain valley located in the northeastern part of Himachal Pradesh. This remote and pristine region offers a unique landscape of barren mountains, ancient Buddhist monasteries, and traditional Tibetan culture.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              The valley remains cut off from the rest of the world for about 6 months during winter due to heavy snowfall. Best time to visit is from May to October when the roads are accessible and weather is favorable.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-slate-900 mb-2">Best Time to Visit</h4>
                <p className="text-slate-600">May to October (Roads are closed in winter)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-slate-900 mb-2">Altitude Range</h4>
                <p className="text-slate-600">3,800m to 4,500m above sea level</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-slate-900 mb-2">Key Attractions</h4>
                <p className="text-slate-600">Key Monastery, Chandratal Lake, Kaza, Pin Valley</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-slate-900 mb-2">Permits Required</h4>
                <p className="text-slate-600">Inner Line Permit needed (We arrange it for you)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready for a High-Altitude Adventure?</h3>
          <p className="text-teal-100 mb-6 text-lg">Let us help you plan the perfect Spiti Valley expedition</p>
          <button
            onClick={() => setEnquiryModalOpen(true)}
            className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all"
          >
            Plan My Spiti Trip
          </button>
        </div>
      </section>

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        packageName={selectedPackage}
      />
    </div>
  );
};

export default SpitiPackages;