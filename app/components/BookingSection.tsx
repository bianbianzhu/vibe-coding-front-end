'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, MessageSquare } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './booking-calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export default function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Available time slots
  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '2:00 PM', available: false },
    { time: '4:00 PM', available: true },
  ];

  // Mock unavailable dates (workshops fully booked)
  const unavailableDates = [
    new Date(2025, 10, 18), // Nov 18, 2025
    new Date(2025, 10, 25), // Nov 25, 2025
  ];

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some(
      (unavailableDate) =>
        date.getDate() === unavailableDate.getDate() &&
        date.getMonth() === unavailableDate.getMonth() &&
        date.getFullYear() === unavailableDate.getFullYear()
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !selectedDate || !selectedTime) {
      setSubmitStatus('error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      return;
    }

    // Success (mock)
    console.log('Booking submitted:', {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    });
    setSubmitStatus('success');

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', specialRequests: '' });
      setSelectedTime('');
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-24 px-12 bg-[#F7F9FA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="font-bold tracking-tight mb-6 uppercase"
            style={{ fontSize: '45.6px', lineHeight: '1.2', letterSpacing: '1px' }}
          >
            Book a Workshop
          </h2>
          <p
            className="text-[#6b6967] max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: '19.2px', lineHeight: '1.6' }}
          >
            Join us for an immersive coffee experience. Learn about brewing techniques, roasting
            processes, and the art of coffee tasting from our expert baristas.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Calendar & Time Slots */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 lg:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <CalendarIcon className="w-8 h-8 text-[#e1b384]" strokeWidth={1.5} />
              <h3
                className="font-semibold uppercase"
                style={{ fontSize: '22.8px', letterSpacing: '1px' }}
              >
                Select Date & Time
              </h3>
            </div>

            {/* Calendar */}
            <div className="mb-8 booking-calendar">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                minDate={new Date()}
                locale="en-US"
                tileDisabled={({ date }) => isDateUnavailable(date)}
                tileClassName={({ date }) =>
                  isDateUnavailable(date) ? 'unavailable-date' : ''
                }
              />
            </div>

            {/* Time Slots */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-[#e1b384]" strokeWidth={1.5} />
                <h4
                  className="font-semibold uppercase"
                  style={{ fontSize: '19.2px', letterSpacing: '1px' }}
                >
                  Available Times
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`py-3 px-4 border transition-all ${
                      selectedTime === slot.time
                        ? 'bg-[#e1b384] text-[#030302] border-[#e1b384]'
                        : slot.available
                        ? 'bg-white border-[#f0f0f0] hover:border-[#e1b384]'
                        : 'bg-[#f7f7f7] border-[#f0f0f0] text-[#bdbdbd] cursor-not-allowed'
                    }`}
                    style={{ fontSize: '16.8px', borderRadius: '3px' }}
                  >
                    {slot.time}
                    {!slot.available && (
                      <span className="block text-xs mt-1" style={{ fontSize: '12px' }}>
                        Fully Booked
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 lg:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-[#e1b384]" strokeWidth={1.5} />
              <h3
                className="font-semibold uppercase"
                style={{ fontSize: '22.8px', letterSpacing: '1px' }}
              >
                Your Information
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold uppercase text-[#2C2926]"
                  style={{ fontSize: '14.4px', letterSpacing: '0.5px' }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#f0f0f0] focus:border-[#e1b384] focus:outline-none transition-colors"
                  style={{ fontSize: '16.8px', borderRadius: '3px' }}
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold uppercase text-[#2C2926]"
                  style={{ fontSize: '14.4px', letterSpacing: '0.5px' }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#f0f0f0] focus:border-[#e1b384] focus:outline-none transition-colors"
                  style={{ fontSize: '16.8px', borderRadius: '3px' }}
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-semibold uppercase text-[#2C2926]"
                  style={{ fontSize: '14.4px', letterSpacing: '0.5px' }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#f0f0f0] focus:border-[#e1b384] focus:outline-none transition-colors"
                  style={{ fontSize: '16.8px', borderRadius: '3px' }}
                  placeholder="+61 400 000 000"
                />
              </div>

              {/* Special Requests */}
              <div>
                <label
                  htmlFor="specialRequests"
                  className="block mb-2 font-semibold uppercase text-[#2C2926] flex items-center gap-2"
                  style={{ fontSize: '14.4px', letterSpacing: '0.5px' }}
                >
                  <MessageSquare className="w-4 h-4" strokeWidth={1.5} />
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#f0f0f0] focus:border-[#e1b384] focus:outline-none transition-colors resize-none"
                  style={{ fontSize: '16.8px', borderRadius: '3px' }}
                  placeholder="Dietary restrictions, preferences, or any questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#030302] text-white px-5 py-3 uppercase font-semibold transition-all hover:bg-[#e1b384] hover:text-[#030302]"
                style={{ fontSize: '16.8px', letterSpacing: '1px', borderRadius: '3px' }}
              >
                Confirm Booking
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-[#e1b384] bg-opacity-10 border border-[#e1b384] text-[#030302]"
                  style={{ fontSize: '16.8px', borderRadius: '3px' }}
                >
                  Booking confirmed! We'll send you a confirmation email shortly.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-300 text-red-800"
                  style={{ fontSize: '16.8px', borderRadius: '3px' }}
                >
                  Please fill in all required fields and select a date and time.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
