import React, { useState } from 'react';
import { PhoneCall, Calendar, Workflow, Zap } from 'lucide-react';
import CustomerServiceCalculator from '../components/assessment/CustomerServiceCalculator';
import ValueSection from '../components/ValueSection';

export default function AssessmentPage() {
  const sections = [
    {
      title: 'Virtual Receptionist',
      icon: PhoneCall,
      question: 'How many hours per week do you spend on call handling?',
      calculateValue: (input: number) => ({
        savings: input * 25,
        description: 'Estimated weekly savings based on $25/hour virtual reception service',
        source: 'Harvard Business Review reports 30% reduction in administrative costs with AI receptionists'
      })
    },
    {
      title: 'AI Appointment Setter',
      icon: Calendar,
      question: 'How many appointments do you schedule monthly?',
      calculateValue: (input: number) => ({
        savings: input * 10,
        description: 'Monthly time savings valued at $10 per appointment',
        source: 'McKinsey reports 40% reduction in scheduling time with AI automation'
      })
    },
    {
      title: 'One-Click Onboarding',
      icon: Zap,
      question: 'How many new clients do you onboard monthly?',
      calculateValue: (input: number) => ({
        savings: input * 100,
        description: 'Estimated monthly savings from streamlined onboarding',
        source: 'Deloitte study shows 60% reduction in onboarding time with AI automation'
      })
    },
    {
      title: 'Workflow Automation',
      icon: Workflow,
      question: 'How many manual processes do you want to automate?',
      calculateValue: (input: number) => ({
        savings: input * 200,
        description: 'Monthly cost savings from automated workflows',
        source: 'Forrester Research indicates 40% cost reduction through workflow automation'
      })
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text [text-shadow:_0_0_30px_rgb(59_130_246_/_0.5)]">
          AI Value Assessment
        </h1>

        <div className="space-y-8">
          <CustomerServiceCalculator />
          {sections.map((section, index) => (
            <ValueSection key={index} {...section} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://calendly.com/kahuthuwork2023/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-lg 
              bg-gradient-to-r from-blue-500 to-purple-600 
              hover:from-blue-600 hover:to-purple-700 
              transition-all duration-300 transform hover:scale-105
              shadow-lg hover:shadow-xl"
          >
            Book a Free AI Growth Consult
          </a>
        </div>
      </div>
    </div>
  );
}