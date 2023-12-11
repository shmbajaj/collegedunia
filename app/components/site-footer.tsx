import React from 'react';
import { Link } from '@remix-run/react';
import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
import { buttonVariants } from './ui/button';
import { StyledHeading2 } from './typography';
import { navConfig } from '~/config/nav';
import { Icons } from './icons';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="w-full border-t text-white  bg-[#000000d9] p-8 md:py-12 md:px-16">
      <div className="grid gap-8 md:grid-cols-[420px_1fr] md:max-w-5xl m-auto">
        <div className="flex flex-col">
          <Link to="/" className="mb-4 flex items-center">
            <Icons.Logo
              className="w-20 h-20 md:w-32 md:h-32"
              color={siteConfig.style.primaryColor}
            />
            <span className="font-bold text-educom">{siteConfig.name}</span>
          </Link>

          <p className="flex flex-col gap-4 text-white  mb-4">
            <span className="leading-6">
              Innovative Technomics Pvt. Ltd. is a company dedicated to
              enterprenual research and innovation.
            </span>
            <span className="leading-6">
              It specializes in Motor Starting Applications using self-developed
              unique FCMA Technology ensuring smooth and harmonic Free starting
              of Squirrel cage and Slip Ring Induction motors and Induction
              Start-sychronous motors.
            </span>
          </p>

          <div className="flex flex-col gap-4 mb-4">
            <p className="flex gap-2 items-baseline">
              <span>
                <MapPinIcon className="w-4 h-4 text-educom" />
              </span>
              <span>
                Plot No 1A/9, Sector 10, PCNTDA, Bhosari, Near Vishweshwar
                Chowk, PUNE 411026, Maharashtra
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <span>
                <MailIcon className="w-4 h-4 text-educom" />
              </span>
              <span>marketing@itechnomics.com</span>
            </p>
            <p className="flex gap-2 items-center">
              <span>
                <PhoneIcon className="w-4 h-4 text-educom" />
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
                      variant: 'default',
                    }),
                    'w-9 p-0 hover:bg-educom/90 hover:bg-opacity-50 '
                  )}
                >
                  <link.Icon className="h-6 w-6 text-white" />
                  <span className="sr-only">{link.title}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="flex gap-8 mb-8">
            <div className="mb-8">
              <StyledHeading2 className="text-2xl mb-4 text-educom">
                Useful Links
              </StyledHeading2>
              <nav className="flex flex-col gap-2">
                {navConfig.mainNav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      'hover:text-educom/90 text-white transition-colors '
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mb-8">
              <StyledHeading2 className="text-2xl mb-4 text-educom">
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
                            'hover:text-educom/90 text-white transition-colors '
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

          <div>
            <StyledHeading2 className="text-2xl mb-4 text-educom">
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

        <div className="col-span-full">
          <p className="text-center leading-loose md:text-left">
            {`Copyright © ${siteConfig.year}`}{' '}
            <span className="font-medium">{siteConfig.name}</span> | Powered by{' '}
            <a
              href={siteConfig.poweredBy.link}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-educom"
            >
              {siteConfig.poweredBy.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
