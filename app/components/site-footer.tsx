import React from 'react';
import { Link } from '@remix-run/react';
import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
import { buttonVariants } from './ui/button';
import { StyledHeading2 } from './typography';
import { navConfig } from '~/config/nav';
import { Icons } from './icons';
import { MapPinIcon } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="py-12 pt-8 md:px-8 md:py-0 w-full border-t text-white  bg-educom/95 grid md:grid-cols-2">
      <div className="flex flex-col p-4">
        <Link to="/" className="mb-8">
          <Icons.Logo className="h-48 w-48" color="text-white" />
          {/* <span className="inline-block font-bold">
            {siteConfig.name}
          </span> */}
        </Link>

        <p className="flex flex-col gap-4 text-white font-semibold leading-4 mb-8">
          <span>
            Innovative Technomics Pvt. Ltd. is a company dedicated to
            enterprenual research and innovation.
          </span>
          <span>
            It specializes in Motor Starting Applications using self-developed
            unique FCMA Technology ensuring smooth and harmonic Free starting of
            Squirrel cage and Slip Ring Induction motors and Induction
            Start-sychronous motors.
          </span>
        </p>

        <div className="flex flex-col gap-4 mb-8">
          <p className="flex gap-4">
            <span>
              <MapPinIcon className="text-white w-8 h-8" />
            </span>
            <span>
              Plot No 1A/9, Sector 10, PCNTDA, Bhosari, Near Vishweshwar Chowk,
              PUNE 411026, Maharashtra
            </span>
          </p>
          <p className="flex gap-4">
            <span>
              <MapPinIcon className="text-white w-8 h-8" />
            </span>
            <span>marketing@itechnomics.com</span>
          </p>
          <p className="flex gap-4">
            <span>
              <MapPinIcon className="text-white w-8 h-8" />
            </span>
            <span>+91 94235 78196</span>
          </p>
        </div>

        <nav className="flex items-center gap-4">
          {siteConfig.links.map((link) => (
            <Link key={link.to} to={link.to} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0 hover:bg-gray-100 hover:bg-opacity-50'
                )}
              >
                <link.Icon className="h-6 w-6" />
                <span className="sr-only">{link.title}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <div className="md:flex gap-4">
          <div className="p-4">
            <StyledHeading2 className="text-2xl mb-4 text-black">
              Useful Links
            </StyledHeading2>
            <nav className="flex flex-col gap-2">
              {navConfig.mainNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    'hover:text-black/90 text-white transition-colors '
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-4">
            <StyledHeading2 className="text-2xl mb-4 text-black">
              Consultation
            </StyledHeading2>
            <nav className="flex flex-col gap-2">
              {navConfig.mobileNav.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  {item.items.map((item) => (
                    <React.Fragment key={item.to}>
                      <Link
                        to={item.to}
                        className={cn(
                          'hover:text-black/90 text-white transition-colors '
                        )}
                      >
                        {item.title}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="p-4">
          <StyledHeading2 className="text-2xl mb-4 text-black">
            Our Location
          </StyledHeading2>
          <div className="w-full h-64 bg-gray-300 mb-4 ">
            <iframe
              title="catalysteducations"
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Catalyst%20Education%20Consultancy,%20Hinjawadi%20Rd,%20Shankar%20Kalat%20Nagar,%20Wakad,%20Pune,%20Pimpri-Chinchwad,%20Maharashtra%20411057+(Catalyst%20Education%20Consultancy%20)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      <div className=" container flex flex-col items-center justify-between gap-4 md:flex-row m-auto max-w-5xl h-14">
        <p className="text-center leading-loose md:text-left">
          {`Copyright © ${siteConfig.year}`}{' '}
          <span className="font-medium">{siteConfig.name}</span> | Powered by{' '}
          <a
            href={siteConfig.poweredBy.link}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-black"
          >
            {siteConfig.poweredBy.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
