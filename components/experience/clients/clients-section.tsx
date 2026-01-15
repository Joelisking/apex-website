import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import ClientCategoryCard from './client-category-card';
import { clientCategories } from './clients-data';

function ClientsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-12">
          <SectionHeader highlightedWord="Clients" size="lg" className="mb-4">
            Our Clients
          </SectionHeader>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We&apos;re proud to partner with state agencies, engineering firms, and
            contractors across Indiana, delivering excellence on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientCategories.map((category) => (
            <ClientCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ClientsSection;
