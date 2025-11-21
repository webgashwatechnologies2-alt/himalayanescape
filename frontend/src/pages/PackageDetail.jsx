import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, MapPin, Calendar, Check, X, Info, ArrowLeft, Phone, Mail } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import { himachalPackages, spitiPackages } from '../mock';

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('itinerary');

  useEffect(() => {
    // Find package from both arrays
    const allPackages = [...himachalPackages, ...spitiPackages];
    const pkg = allPackages.find(p => p.id === parseInt(id));
    setPackageData(pkg);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  if (!packageData) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Package Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-teal-600 hover:text-teal-700 font-semibold"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-slate-50">
      {/* Hero Section with Images */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-teal-600 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2">
              <img
                src={packageData.image}
                alt={packageData.name}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              {packageData.images?.slice(1, 3).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${packageData.name} ${index + 2}`}
                  className="w-full h-44 object-cover rounded-2xl shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Package Header Info */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {packageData.name}
              </h1>
              <p className="text-lg text-slate-600 mb-4">{packageData.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="text-teal-600" size={20} />
                  <span className="font-medium">{packageData.duration}</span>
                </div>
                {packageData.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {packageData.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-teal-50 rounded-2xl p-6 shadow-lg w-full lg:w-80 flex-shrink-0">
              <div className="text-center mb-4">
                <p className="text-slate-600 text-sm mb-2">Starting from</p>
                <p className="text-4xl font-bold text-teal-600">{packageData.price}</p>
                <p className="text-slate-500 text-sm">per person</p>
              </div>
              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="w-full bg-teal-600 text-white py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors mb-3"
              >
                Book Now
              </button>
              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="w-full border-2 border-teal-600 text-teal-600 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors"
              >
                Send Enquiry
              </button>
              <div className="mt-4 pt-4 border-t border-teal-200">
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                  <Phone size={16} className="text-teal-600" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail size={16} className="text-teal-600" />
                  <span>info@himalayanescape.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white border-t border-slate-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'itinerary'
                  ? 'border-teal-600 text-teal-600'
                  : 'border-transparent text-slate-600 hover:text-teal-600'
              }`}
            >
              Itinerary
            </button>
            <button
              onClick={() => setActiveTab('inclusions')}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'inclusions'
                  ? 'border-teal-600 text-teal-600'
                  : 'border-transparent text-slate-600 hover:text-teal-600'
              }`}
            >
              Inclusions & Exclusions
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'info'
                  ? 'border-teal-600 text-teal-600'
                  : 'border-transparent text-slate-600 hover:text-teal-600'
              }`}
            >
              Important Information
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Itinerary Tab */}
            {activeTab === 'itinerary' && packageData.itinerary && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Day-by-Day Itinerary</h2>
                {packageData.itinerary.map((day, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{day.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Inclusions & Exclusions Tab */}
            {activeTab === 'inclusions' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Check className="text-green-600" size={28} />
                    Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {packageData.inclusions?.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <X className="text-red-600" size={28} />
                    Exclusions
                  </h3>
                  <ul className="space-y-3">
                    {packageData.exclusions?.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="text-red-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Important Information Tab */}
            {activeTab === 'info' && packageData.importantInfo && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Info className="text-teal-600" size={28} />
                  Important Information
                </h3>
                <ul className="space-y-4">
                  {packageData.importantInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                      <Info className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-teal-600 text-white py-12 sticky bottom-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-bold mb-1">{packageData.price} per person</p>
              <p className="text-teal-100">{packageData.duration} • {packageData.name}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors"
              >
                Book This Package
              </button>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-teal-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        packageName={packageData.name}
      />
    </div>
  );
};

export default PackageDetail;
