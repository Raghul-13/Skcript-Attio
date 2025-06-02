import React, { useEffect, useRef, useState } from 'react';

const TestimonialSection:React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
    <section 
      ref={sectionRef}
      className="py-10 flex items-center justify-center px-6 bg-white"
    >
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className={`mb-12 transition-colors duration-700 ${isVisible ? 'text-black' : 'text-gray-400'}`}>
          <blockquote className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight mb-8">
            "When I first opened Attio,<br />
            I instantly got the feeling this was<br />
            the next generation of CRM."
          </blockquote>
          
          <div className="text-center">
            <p className="text-lg font-bold mb-1">Margaret Shen</p>
            <p className="text-sm font-bold text-gray-600">Head of Business Operations — Modal</p>
          </div>
        </div>
      </div>
    </section>
    <section className='bg-white px-2 pb-10'>
      <div className={`border-t border-gray-200 pt-8 transition-colors duration-700 ${isVisible ? 'text-black' : 'text-gray-400'}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xs font-mono mr-2">[01]</span>
              <span className="text-sm font-medium">POWERFUL PLATFORM</span>
            </div>
            <div className="flex items-center">
              <span className="text-xs font-mono mr-2">/ITEM1:4</span>
            </div>
          </div>
        </div>
    </section>
    <section className="py-5 sm:pt-2 sm:pb-4 px-6 bg-white">
        <div className="w-full max-w-2xl lg:ms-50 sm:text-center">
            <blockquote className="text-xl font-bold leading-[1.50] tracking-tight mb-8 text-gray-400">
                <span className='text-black'>GTM at full throttle.</span>Execute your revenue strategy with <br />
                precision. Design powerful workflows, deploy AI, integrate <br />
                your data and build detailed reports — all in one platform.
            </blockquote>
        </div>
    </section>
    </>
  );
};

export default TestimonialSection;