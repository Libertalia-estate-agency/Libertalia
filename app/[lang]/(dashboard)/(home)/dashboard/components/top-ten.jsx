"use client"
import { Eye } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardDropdown from "@/components/dashboard-dropdown";
import facebook from "@/public/images/social/facebook.png"
import instagram from "@/public/images/social/instagram.png"
import dribble from "@/public/images/social/dribble.png"
import linkedin from "@/public/images/social/linkedin.png"
import github from "@/public/images/social/github.png"
import behance from "@/public/images/social/behance.png"
import twitter from "@/public/images/social/twitter.png"
import pinterest from "@/public/images/social/pinterest.png"
import whatsapp from "@/public/images/social/whatsapp.png"
import reddit from "@/public/images/social/reddit.png"
import youtube from "@/public/images/social/youtube.png"

import property24 from "@/public/images/social/property24.png"
import property24_ from "@/public/images/social/property24_logo_48.png"

import libertalia1 from "@/public/images/social/Libertalia_48x.png"

import libertalia from "@/public/images/social/libertalia48x.png"
import p24 from "@/public/images/social/p24.png"

import game from "@/public/images/social/game.png"

import google from "@/public/images/social/google1.png"

const socials = [
  {
    id: 1,
    name: "Instagram",
    link: "Libertalia Page",
    total: "4963",
    image: instagram
  },
  {
    id: 2,
    name: "Property24",
    link: "Libertalia Properties",
    total: "2963",
    image: p24
  },
  {
    id: 3,
    name: "Facebook",
    link: "Libertalia Page",
    total: "1963",
    image: facebook
  },
  {
    id: 4,
    name: "TWK",
    link: "www.twk.co.za",
    total: "963",
    image: libertalia
  },
  {
    id: 5,
    name: "Twitter",
    link: "www.x.com/libertalia",
    total: "663",
    image: twitter
  },
  {
    id: 6,
    name: "LinkedIn",
    link: "Libertalia Properties",
    total: "363",
    image: linkedin
  },
  {
    id: 7,
    name: "Youtube",
    link: "Libertalia Properties",
    total: "333",
    image: youtube
  },
  {
    id: 8,
    name: "Google SEO",
    link: "www.google.com",
    total: "293",
    image: google
  },
  {
    id: 9,
    name: "WhatsApp",
    link: "www.whatsapp.com",
    total: "213",
    image: whatsapp
  },
  {
    id: 10,
    name: "Sayipa",
    link: "www.sayipa.co.za",
    total: "113",
    image: game
  }
];
const TopTen = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> Top 10 Referrals </CardTitle>
        <DashboardDropdown />
      </CardHeader>
      <CardContent className="px-0">
        <div>
          {
            socials.map((item, index) => (
              <div className="flex flex-wrap  gap-2 hover:bg-default-50 py-[11px] px-4" key={`social-item-${index}`}>
                <div className="flex-1 flex items-center gap-3">
                  <div className="w-8 h-8 md:h-10 md:w-10">
                    <Image src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-default-600">{item.name}</div>
                    <div className="text-xs text-default-500"> {item.link}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="text-base font-medium text-default-600"> {item.total}</div>
                  <div className="h-5 w-5 rounded-full bg-primary bg-opacity-10  justify-center items-center hidden md:flex">
                    <Eye className="w-2.5 h-2.5 text-primary" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default TopTen;