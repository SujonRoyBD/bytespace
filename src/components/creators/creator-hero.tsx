"use client";

import * as React from "react";
import { UserPlus, UserCheck, Sparkles } from "lucide-react";
import { Creator } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CreatorHeroProps {
  creator: Creator;
}

export function CreatorHero({ creator }: CreatorHeroProps) {
  const [isFollowing, setIsFollowing] = React.useState(creator.isFollowing || false);
  const [followersCount, setFollowersCount] = React.useState(creator.followersCount);

  const toggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prev) => Math.max(0, prev - 1));
    } else {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full blueprint-grid text-white pt-10 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Avatar & Name Header */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl object-cover ring-4 ring-white/20 shadow-xl"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-sans">
                  {creator.name}
                </h1>
                <Badge variant="lime" className="text-xs font-bold px-3 py-0.5 shadow-xs">
                  Creator
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-blue-100 font-medium">
                {creator.role}
              </p>
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-xs sm:text-sm text-blue-50/90 leading-relaxed max-w-3xl">
            {creator.bio}
          </p>

          {/* Stats & Follow Button Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <Badge variant="pill-white" className="text-slate-900 font-bold px-4 py-1.5 shadow-sm">
                <span className="text-[#0047FF] mr-1">{creator.productsCount}</span> Products
              </Badge>

              <Badge variant="pill-white" className="text-slate-900 font-bold px-4 py-1.5 shadow-sm">
                <span className="text-[#0047FF] mr-1">{followersCount}</span> Followers
              </Badge>
            </div>

            {/* Follow Button */}
            <Button
              onClick={toggleFollow}
              variant={isFollowing ? "outline" : "lime"}
              size="pill"
              className="px-6 py-2 text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-transform"
            >
              {isFollowing ? (
                <>
                  <UserCheck className="w-3.5 h-3.5 mr-1.5" />
                  Following
                </>
              ) : (
                <>
                  <UserPlus className="w-3.5 h-3.5 mr-1.5" />
                  Follow
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
