import type { Album } from '~/components/album-card';
import { AlbumArtWork } from '~/components/album-card';
import { PageHeaderHeading } from '../../../components/page-header';
import { Card, CardHeader } from '../../../components/ui/card';
import { whyChooseUsAlbums } from '~/data/album.data';

export function WhyChooseUs({ albums }: { albums?: Album[] }) {
  return (
    <section className="flex items-center bg-educom p-4 lg:p-8">
      <Card className="p-2 lg:p-8 items-center lg:max-w-3xl md:m-auto text-center m-auto">
        <CardHeader>
          <p className="uppercase text-orange-300 font-medium">WHY US</p>
          <PageHeaderHeading className="capitalize">
            Why choose Educom Guidance?
          </PageHeaderHeading>
          <hr className="h-1 w-36 rounded border-0 bg-orange-500 m-auto" />
        </CardHeader>
        <AlbumArtWork
          albums={albums ?? whyChooseUsAlbums}
          // className="w-[250px]"
        />
      </Card>
    </section>
  );
}
