/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useId, useMemo, useState } from "react";

type Testimonial = {
  name: string;
  company: string;
  quote: string;
  avatar: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
  interval?: number;
};

export function TestimonialsCarousel({
  testimonials,
  interval = 6500
}: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);
  const carouselId = useId();

  const safeTestimonials = useMemo(
    () => testimonials.filter((testimonial) => testimonial.quote.length > 0),
    [testimonials]
  );

  useEffect(() => {
    if (safeTestimonials.length < 2) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeTestimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [safeTestimonials, interval]);

  useEffect(() => {
    if (index >= safeTestimonials.length) {
      setIndex(0);
    }
  }, [index, safeTestimonials.length]);

  if (!safeTestimonials.length) return null;

  return (
    <section aria-labelledby={`${carouselId}-title`}>
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-10 shadow-card backdrop-blur-md">
        <h2
          id={`${carouselId}-title`}
          className="text-3xl font-semibold text-brand-navy md:text-4xl"
        >
          Trusted by forward-thinking organizations
        </h2>
        <div className="relative mt-8">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * 100}%)`,
              width: `${safeTestimonials.length * 100}%`
            }}
          >
            {safeTestimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="min-w-full"
                aria-label={`${testimonial.name}, ${testimonial.company}`}
              >
                <blockquote className="text-xl leading-relaxed text-slate-700">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-brand-light">
                    <img
                      src={testimonial.avatar}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            {safeTestimonials.map((testimonial, idx) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${idx + 1} of ${safeTestimonials.length}`}
                aria-pressed={idx === index}
                onClick={() => setIndex(idx)}
                className={`h-2.5 w-10 rounded-full transition-all duration-300 ${
                  idx === index ? "bg-brand-green" : "bg-slate-200 hover:bg-brand-blue/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
