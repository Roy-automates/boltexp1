import React from 'react';
import { MessageSquare, Mic, Settings } from 'lucide-react';
import UserForm from '../components/form/UserForm';
import FeatureCard from '../components/features/FeatureCard';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import BenefitCard from '../components/benefits/BenefitCard';
import { ChartLine, Calendar2, LayoutGrid } from '../components/icons/BusinessIcons';

export default function WelcomePage() {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Enhance customer support with intelligent, 24/7 virtual assistants.'
    },
    {
      icon: Mic,
      title: 'Voice Agents',
      description: 'Implement voice-activated solutions for seamless, hands-free interactions.'
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Streamline operations with AI-powered process optimization.'
    }
  ];

  const testimonials = [
    {
      quote: "The AI audit revealed potential savings of over $100,000 per year for my business. I'm amazed!",
      author: "Sarah Johnson",
      position: "CEO, TechFlow Solutions"
    },
    {
      quote: "After implementing AI solutions, our customer engagement improved by 40% and operational costs decreased significantly.",
      author: "Michael Chen",
      position: "Founder, InnovateX"
    }
  ];

  const benefits = [
    {
      icon: ChartLine,
      title: 'Boost Revenue',
      description: 'Increase your business revenue by 16-20% in the first year with AI-powered customer engagement.'
    },
    {
      icon: Calendar2,
      title: 'Reduce Response Time',
      description: 'Cut down response times by up to 30% with AI-powered automation.'
    },
    {
      icon: LayoutGrid,
      title: 'Save Time',
      description: 'Automate up to 60-95% of repetitive tasks, allowing your staff to focus on growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            AI Value Assessment Tool for Business
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unlock the future of your business with AI-powered solutions
          </p>
        </div>

        <UserForm />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          What Business Leaders Are Saying
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Unlock Your Business's Potential
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}