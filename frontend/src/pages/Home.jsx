import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Award,
  Shield,
  Clock,
  Heart,
  DollarSign,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import PackageCard from "../components/PackageCard";
import EnquiryModal from "../components/EnquiryModal";
import {
  heroSlides,
  himachalPackages,
  spitiPackages,
  testimonials,
  galleryImages,
  whyChooseUs,
} from "../mock";

const Home = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleEnquiry = (pkg) => {
    setSelectedPackage(pkg.name);
    setEnquiryModalOpen(true);
  };

  const iconComponents = {
    Shield,
    Award,
    DollarSign,
    Heart,
    Clock,
    Users,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm text-teal-600 font-semibold mb-3 tracking-wider uppercase">
                About Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Your Gateway to{" "}
                <span className="text-teal-600">Himalayan Adventures</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Himalayan Escape is your trusted partner for unforgettable
                journeys through the majestic Himalayas. With over a decade of
                experience, we specialize in crafting personalized tours that
                showcase the breathtaking beauty, rich culture, and thrilling
                adventures of Himachal Pradesh and Spiti Valley.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our expert team is passionate about creating memories that last
                a lifetime, ensuring every traveler experiences the magic of the
                mountains with comfort, safety, and authenticity.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
                    alt="Mountains"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80"
                    alt="Valley"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                <img
                    src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80"
                    alt="Monastery"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />



                  <img
                    src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&q=80"
                    alt="Adventure"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                  />
                </div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 w-64">
                <div className="flex items-center justify-around">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600">10+</div>
                    <div className="text-sm text-slate-600">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600">
                      5000+
                    </div>
                    <div className="text-sm text-slate-600">Travelers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600">50+</div>
                    <div className="text-sm text-slate-600">Tours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Himachal Packages */}
      <section className="py-20 bg-slate-50 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm text-teal-600 font-semibold mb-3 tracking-wider uppercase">
              Popular Tours
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Himachal Tour Packages
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore the stunning valleys, colonial hill stations, and
              adventure destinations of Himachal Pradesh
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {himachalPackages.slice(0, 3).map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                onEnquiry={handleEnquiry}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/packages/himachal"
              className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-all"
            >
              View All Himachal Packages
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action 1 */}
      <section className="py-20 bg-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Mountain Adventure?
          </h3>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Let us create a customized itinerary that perfectly matches your
            dreams and budget
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-2xl transform hover:-translate-y-1"
            >
              Plan Your Trip Now
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Spiti Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm text-teal-600 font-semibold mb-3 tracking-wider uppercase">
              Off The Beaten Path
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Spiti Valley Expeditions
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Journey to the remote cold desert, ancient monasteries, and
              pristine landscapes of Spiti Valley
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spitiPackages.slice(0, 3).map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                onEnquiry={handleEnquiry}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/packages/spiti"
              className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-all"
            >
              View All Spiti Packages
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm text-teal-600 font-semibold mb-3 tracking-wider uppercase">
              Why Travel With Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Himalayan Escape?
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We go beyond ordinary tours to deliver extraordinary experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const IconComponent = iconComponents[item.icon];
              return (
                <div
                  key={item.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                    <IconComponent
                      className="text-teal-600 group-hover:text-white transition-colors"
                      size={32}
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm text-teal-600 font-semibold mb-3 tracking-wider uppercase">
              Testimonials
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Real experiences from travelers who explored the Himalayas with us
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm text-teal-600 font-medium">
                    {testimonial.tour}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm text-teal-400 font-semibold mb-3 tracking-wider uppercase">
              Our Gallery
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Moments Worth Capturing
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A glimpse into the stunning landscapes and adventures that await
              you
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">
                      {image.title}
                    </p>
                    <p className="text-teal-400 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Himalayan Journey Today
          </h3>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Contact us now to customize your perfect mountain adventure
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-2xl"
            >
              <Phone size={20} />
              Call Us Now
            </a>
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all"
            >
              <Mail size={20} />
              Send Enquiry
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Check size={20} className="text-teal-400" />
              <span>Customizable Itineraries</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-teal-400" />
              <span>Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-teal-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        packageName={selectedPackage}
      />
    </div>
  );
};

export default Home;
