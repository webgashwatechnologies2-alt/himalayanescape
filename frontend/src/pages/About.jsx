import React from 'react';
import { Award, Users, Target, Heart, MapPin, Shield } from 'lucide-react';
import { aboutContent } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Himalayan Escape</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Crafting Unforgettable Himalayan Experiences Since 2014
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Our Story</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {aboutContent.story}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're seeking adventure, spiritual retreat, or simply want to disconnect from the world and reconnect with nature, we're here to make your Himalayan dreams come true.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutContent.stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-teal-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-teal-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-teal-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {aboutContent.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-teal-600" size={36} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Safety First</h4>
              <p className="text-slate-600 leading-relaxed">
                Your safety is our top priority. We ensure all tours are conducted with the highest safety standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-teal-600" size={36} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Authentic Experiences</h4>
              <p className="text-slate-600 leading-relaxed">
                We believe in creating genuine connections with local culture, nature, and people.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-teal-600" size={36} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Customer Satisfaction</h4>
              <p className="text-slate-600 leading-relaxed">
                We go above and beyond to ensure every traveler has an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Explore with Us?</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have experienced the magic of the Himalayas with Himalayan Escape
          </p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-2xl transform hover:-translate-y-1">
            View Our Packages
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;