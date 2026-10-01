import * as React from "react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Janelle M.",
      role: "Enthusiastic Learner",
      avatar: "/images/sara.png",
      content:
        "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
      rating: 5,
    },
    {
      name: "James L.",
      role: "Lifelong Learner",
      avatar: "/images/jamel.png",
      content:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
      rating: 5,
    },
    {
      name: "Alex D.",
      role: "Inspired Creator",
      avatar: "/images/alex.png",
      content:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
      rating: 5,
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <h2 className=" text-[44px] font-semibold leading-[120%] tracking-[-1%]">
            Discover What Our <br />
            Community Is Saying
          </h2>
        </div>

        <div className="lg:col-span-7">
          <div className=" rounded-3xl font-satoshi text-[18px] font-normal leading-[160%] tracking-normal">
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
            className="bg-white rounded-3xl p-6 sm:p-7  shadow-sm space-y-4 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
              />
              <div>
                <h4 className=" text-[20px] font-semibold leading-[120%] tracking-[-1%]">
                  {t.name}
                </h4>
                <p className="font-satoshi text-[#003BE2] text-[18px] font-normal leading-[160%] tracking-normal">
                  {t.role}
                </p>
              </div>
            </div>

            <p className="font-satoshi text-[18px] font-normal leading-[160%] tracking-normal">
              &ldquo;{t.content}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
