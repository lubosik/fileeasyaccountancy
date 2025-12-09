'use client';

import Image from 'next/image';
import { User, Linkedin, Mail } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  photoPlaceholder?: string;
  photoUrl?: string;
  linkedinUrl?: string;
  email?: string;
  isMan?: boolean;
  altText?: string;
}

export default function TeamMemberCard({
  name,
  role,
  description,
  photoPlaceholder = "Photo coming soon",
  photoUrl,
  linkedinUrl,
  email,
  altText
}: TeamMemberCardProps) {
  return (
    <div className=" rounded-lg border border-primary/10 overflow-hidden hover:shadow-lg transition-shadow duration-300" style={{ backgroundColor: '#F8F8F5' }}>
      {/* Photo Section */}
      <div className="aspect-[4/5] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={altText || `${name} — ${role} at Fileeasy Accountancy, Medway.`}
            width={400}
            height={500}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center">
              <User className="w-12 h-12 text-primary/70" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">{photoPlaceholder}</p>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
        <p className="text-brand-secondary font-semibold mb-3">{role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Contact Links */}
        <div className="flex space-x-3">
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center space-x-1 text-brand-secondary hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-brand-secondary hover:text-primary transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
