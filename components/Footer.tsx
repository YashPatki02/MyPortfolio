import { DATA } from '@/lib/data';
import React from 'react'

const Footer = () => {
  return (
      <footer className="pt-3">
          <div className="mt-4 mb-4 text-center w-full text-sm text-muted-foreground">
              &copy; {DATA.yearMade} {DATA.name}. All rights reserved.
          </div>
      </footer>
  );
}

export default Footer