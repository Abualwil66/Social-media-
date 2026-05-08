import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SiSnapchat } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Github,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
  Mail,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { useState } from 'react';

// 👇 بياناتك الشخصية
const USER = {
  name: 'Waleed Khalid Bakri',
  title: 'Developer • IT • Markting',
  bio: 'i love learning any thing print money , and sharing knowledge also solving problem of other .',
  avatar: '/myself.jpeg',
  links: {
    github: 'your-github',
    twitter: 'your-twitter',
    instagram: 'abuali',
    youtube: 'your-youtube',
    linkedin: 'your-linkedin',
    website: 'https://yourwebsite.com',
    email: 'waleedbakri24@gmail.com',
  },
};

// 👇 أيقونات خفيفة (أفضل أداء)
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Abualwil66',
    icon: Github,
    bg: 'bg-[#24292e] hover:bg-[#1b1f23]',
    desc: 'Code & projects',
  },
  {
    name: 'Snapchat',
    url: `https://snapchat.com/add/abualwil1`,
    icon: SiSnapchat,
    bg: 'bg-yellow-400 hover:bg-yellow-500',
    desc: 'Follow me on Snap',
  },
  {
    name: 'Instagram',
    url: `https://www.instagram.com/itswaleed_khalid?igsh=MTRlZDc1ZXZ6NXZ6NQ%3D%3D&utm_source=qr`,
    icon: Instagram,
    bg: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
    desc: 'Lifestyle & moments',
  },
  {
    name: 'LinkedIn',
    url: `https://linkedin.com/in/waleed-bakri-b467942aa`,
    icon: Linkedin,
    bg: 'bg-[#0077b5] hover:bg-[#00669c]',
    desc: 'Professional profile',
  },
  {
    name: 'Email',
    url: `mailto:${USER.links.email}`,
    icon: Mail,
    bg: 'bg-[#ea4335] hover:bg-[#d33426]',
    desc: 'Get in touch',
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Copy failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* خلفية خفيفة */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 py-12">
        {/* Profile */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
        <Avatar className="w-28 h-28 overflow-hidden">
          <AvatarImage
          src={USER.avatar}
          className="object-cover w-full h-full"
          />
        </Avatar>

          <h1 className="text-3xl font-bold text-white mt-4">
            {USER.name}
          </h1>

          <p className="text-slate-400">{USER.title}</p>

          <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">
            {USER.bio}
          </p>

          {/* Copy link */}
          <div className="flex justify-center mt-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={copyLink}
                    className="flex items-center gap-2 text-slate-400 hover:text-white text-sm"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {copied ? 'Copied' : 'Share'}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  Copy profile link
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
                {/* CV */}
               <a
                 href="/-cv.docx"
                 target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-white/10 transition"
                   >
                  <ExternalLink className="w-4 h-4" />
                   CV
                </a>

          </div>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className={`${link.bg} border-0 transition-all hover:scale-[1.02]`}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-white" />
                      <div>
                        <p className="text-white font-medium">
                          {link.name}
                        </p>
                        <p className="text-white/60 text-xs">
                          {link.desc}
                        </p>
                      </div>
                    </div>

                    <ExternalLink className="w-4 h-4 text-white/60 opacity-0 group-hover:opacity-100" />
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center text-slate-600 text-xs mt-10">
          © {new Date().getFullYear()} {USER.name}
        </div>
      </div>
    </div>
  );
}