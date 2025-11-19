'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Sparkles } from 'lucide-react';

export default function BookingDemo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('bookingDemoSeen');
    if (!seen) {
      setIsVisible(true);
    }
  }, []);
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [typedName, setTypedName] = useState('');
  const [typedEmail, setTypedEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const fullName = 'Sarah Chen';
  const fullEmail = 'sarah@example.com';

  // Show popup after 2 seconds
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  // Animation sequence
  useEffect(() => {
    if (!shouldAnimate) return;

    const sequence = async () => {
      // Wait before starting
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Step 1: Select date (date 20)
      setStep(1);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSelectedDate(20);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Step 2: Select time
      setStep(2);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSelectedTime('2:00 PM');
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Step 3: Type name
      setStep(3);
      for (let i = 0; i <= fullName.length; i++) {
        setTypedName(fullName.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Step 4: Type email
      setStep(4);
      for (let i = 0; i <= fullEmail.length; i++) {
        setTypedEmail(fullEmail.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 60));
      }
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Step 5: Show success
      setStep(5);
      setShowSuccess(true);
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // Reset and loop
      setStep(0);
      setSelectedDate(null);
      setSelectedTime(null);
      setTypedName('');
      setTypedEmail('');
      setShowSuccess(false);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Restart sequence
      sequence();
    };

    sequence();
  }, [shouldAnimate]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('bookingDemoSeen', 'true');
  };

  const handleTryNow = () => {
    setIsVisible(false);
    localStorage.setItem('bookingDemoSeen', 'true');
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50"
          style={{ width: '380px', maxWidth: '95vw' }}
        >
          {/* Card */}
          <div className="bg-white rounded-lg shadow-2xl border border-[#f0f0f0] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#e1b384] to-[#de8d3b] p-4 relative">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5" />
                <h3
                  className="font-bold uppercase"
                  style={{ fontSize: '14.4px', letterSpacing: '0.5px' }}
                >
                  New Feature: Book Workshops
                </h3>
              </div>
              <p className="text-white text-opacity-90 mt-1" style={{ fontSize: '12px' }}>
                Watch how easy it is to book a session
              </p>
            </div>

            {/* Demo Content */}
            <div className="p-5 bg-[#F7F9FA]">
              {/* Mini Calendar */}
              <div className="bg-white rounded p-3 mb-3 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#e1b384]" />
                  <span className="font-semibold" style={{ fontSize: '12px' }}>
                    SELECT DATE
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {[
                    { day: 16, disabled: true },
                    { day: 17, disabled: true },
                    { day: 18, disabled: false },
                    { day: 19, disabled: false },
                    { day: 20, disabled: false },
                    { day: 21, disabled: false },
                    { day: 22, disabled: false },
                  ].map((date) => (
                    <motion.div
                      key={date.day}
                      animate={{
                        scale: selectedDate === date.day ? 1.1 : 1,
                        backgroundColor:
                          selectedDate === date.day ? '#e1b384' : date.disabled ? '#f5f5f5' : '#ffffff',
                        color: selectedDate === date.day ? '#030302' : date.disabled ? '#bdbdbd' : '#2C2926',
                      }}
                      className="aspect-square flex items-center justify-center rounded text-xs font-medium border border-[#f0f0f0]"
                      style={{ fontSize: '11px' }}
                    >
                      {date.day}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mini Time Slots */}
              <div className="bg-white rounded p-3 mb-3 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#e1b384]" />
                  <span className="font-semibold" style={{ fontSize: '12px' }}>
                    SELECT TIME
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['10:00 AM', '2:00 PM'].map((time) => (
                    <motion.div
                      key={time}
                      animate={{
                        scale: selectedTime === time ? 1.05 : 1,
                        backgroundColor: selectedTime === time ? '#e1b384' : '#ffffff',
                        color: selectedTime === time ? '#030302' : '#2C2926',
                        borderColor: selectedTime === time ? '#e1b384' : '#f0f0f0',
                      }}
                      className="py-2 px-3 rounded border text-center font-medium"
                      style={{ fontSize: '11px' }}
                    >
                      {time}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mini Form */}
              <div className="bg-white rounded p-3 mb-3 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-4 h-4 text-[#e1b384]" />
                  <span className="font-semibold" style={{ fontSize: '12px' }}>
                    YOUR INFO
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-[#6b6967] block mb-1" style={{ fontSize: '10px' }}>
                      Name
                    </label>
                    <div className="border border-[#f0f0f0] rounded px-2 bg-white min-h-[28px] flex items-center">
                      <motion.span
                        className="text-[#2C2926] block"
                        style={{ fontSize: '11px', minHeight: '16px' }}
                        animate={{
                          opacity: step >= 3 ? 1 : 0.3,
                        }}
                      >
                        {typedName || '\u00A0'}
                        {step === 3 && typedName.length < fullName.length && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="inline-block w-0.5 h-3 bg-[#e1b384] ml-0.5"
                          />
                        )}
                      </motion.span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[#6b6967] block mb-1" style={{ fontSize: '10px' }}>
                      Email
                    </label>
                    <div className="border border-[#f0f0f0] rounded px-2 bg-white min-h-[28px] flex items-center">
                      <motion.span
                        className="text-[#2C2926] block"
                        style={{ fontSize: '11px', minHeight: '16px' }}
                        animate={{
                          opacity: step >= 4 ? 1 : 0.3,
                        }}
                      >
                        {typedEmail || '\u00A0'}
                        {step === 4 && typedEmail.length < fullEmail.length && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="inline-block w-0.5 h-3 bg-[#e1b384] ml-0.5"
                          />
                        )}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-[#e1b384] bg-opacity-20 border border-[#e1b384] rounded p-3 mb-3"
                  >
                    <p className="text-[#030302] text-center font-semibold" style={{ fontSize: '11px' }}>
                      ✓ Booking confirmed!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA Button */}
              <button
                onClick={handleTryNow}
                className="w-full bg-[#030302] text-white py-2.5 rounded uppercase font-semibold transition-all hover:bg-[#e1b384] hover:text-[#030302]"
                style={{ fontSize: '12px', letterSpacing: '0.5px' }}
              >
                Try It Now
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="bg-white px-5 py-2 border-t border-[#f0f0f0]">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <motion.div
                    key={s}
                    animate={{
                      backgroundColor: step >= s ? '#e1b384' : '#f0f0f0',
                    }}
                    className="h-1 flex-1 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
