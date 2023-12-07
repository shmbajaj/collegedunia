import { Link } from '@remix-run/react';
import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
import { buttonVariants } from './ui/button';

export function SiteFooter() {
  return (
    <footer className="py-[6rem] md:px-8 md:py-0 w-full border-t text-white  bg-educom/95">
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
    </footer>
  );
}
