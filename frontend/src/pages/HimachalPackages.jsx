import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import EnquiryModal from '../components/EnquiryModal';
import { himachalPackages } from '../mock';

const HimachalPackages = () => {
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="text-teal-400" size={24} />
            <span className="text-teal-400 font-semibold">Himachal Pradesh Tours</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Himachal Tour Packages</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Discover the beauty of Himachal Pradesh with our carefully curated tour packages. From snow-capped mountains to lush valleys, experience it all.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {himachalPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} onEnquiry={handleEnquiry} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Himachal Pradesh</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Himachal Pradesh, nestled in the lap of the Himalayas, is a paradise for nature lovers and adventure enthusiasts. Known for its stunning landscapes, colonial architecture, and spiritual retreats, this state offers something for every traveler.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              From the bustling hill station of Shimla to the adventure capital Manali, from the spiritual haven of Dharamshala to the serene valleys of Kasol - each destination has its unique charm waiting to be explored.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-teal-100 mb-6 text-lg">We can customize any package to match your preferences and budget</p>
          <button
            onClick={() => setEnquiryModalOpen(true)}
            className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all"
          >
            Request Custom Package
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

export default HimachalPackages;