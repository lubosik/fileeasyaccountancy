'use client';

import { useEffect } from 'react';

interface RedirectComponentProps {
  url: string;
  title: string;
}

export default function RedirectComponent({ url, title }: RedirectComponentProps) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="mb-4">Redirecting to {title}...</p>
        <p className="text-sm text-muted-foreground">
          <a href={url} className="text-primary hover:underline">
            Click here if you are not redirected
          </a>
        </p>
      </div>
    </div>
  );
}

