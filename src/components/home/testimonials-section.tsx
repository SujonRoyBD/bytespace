import * as React from "react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Janelle M.",
      role: "3D Artist | Learner",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content:
        "The 3D Asset Creation course completely exceeded my expectations. The hands-on project workflow gave me the confidence to transition into freelance 3D design full time. I cannot recommend ByteSpace enough!",
      rating: 5,
    },
    {
      name: "James L.",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content:
        "From foundational principles to advanced prototyping, every module provided practical insights that I use daily at work. The community and instructor feedback were game changers for my career.",
      rating: 5,
    },
    {
      name: "Alex D.",
      role: "Frontend Learner",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content:
        "The structure of the courses is unmatched. Clear milestones, top-tier asset downloads, and responsive instructors make ByteSpace my go-to learning platform for technical skills.",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Discover What Our <br />
            Community Is Saying
          </h2>
        </div>

        <div className="lg:col-span-7">
          <div className=" rounded-3xl p-6 sm:p-8 text-xs sm:text-sm text-slate-800 leading-relaxed">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of everything we do. Dive into these testimonials to
            discover the impact our courses have had on individuals from various
            walks of life. Their experiences, successes, and insights reflect
            the power of our platform and the dedication of our instructors.
          </div>
        </div>
      </div>

      {/* 3 Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm space-y-4 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
              />
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  {t.name}
                </h4>
                <p className="text-[11px] text-slate-400">{t.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-0.5">
              {[...Array(t.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              &ldquo;{t.content}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
