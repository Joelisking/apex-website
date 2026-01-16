import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import LocationMap from './location-map';
import { officeLocations } from './locations-data';

function LocationsSection() {
  return (
    <section className="my-16 md:my-24">
      <Container>
        <SectionHeader
          highlightedWord="Locations"
          size="base"
          className="mb-1">
          Office Locations
        </SectionHeader>
        <p className="md:text-lg leading-relaxed mb-4">
          Our Main Office Is Located In The City Of Fort Wayne And Has
          Been Providing Professional Surveying And Engineering
          Services For The Northern State Of Indiana Region. We
          Recently Opened A Branch Office On The North Side Of The
          City Of Indianapolis, Which Will Aim To Service The Central
          Indiana Region.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {officeLocations.map((location, index) => (
            <LocationMap key={index} location={location} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default LocationsSection;
