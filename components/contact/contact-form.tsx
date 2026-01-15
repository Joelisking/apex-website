'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import Container from '@/components/shared/container';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setIsSubmitting(true);
    setHasSubmitted(false);

    const formData = new FormData(event.currentTarget);
    // Placeholder – hook this into your email service or API route.
    console.log(
      'Contact form submitted',
      Object.fromEntries(formData.entries())
    );

    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setHasSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <Container className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        {/* Form */}
        <div className="rounded-2xl bg-white shadow-sm border border-zinc-200/70 p-6 md:p-8 lg:p-10 space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-900">
              Tell us about your project
            </h2>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              Share a few details and we&apos;ll follow up with the
              right next steps, whether you&apos;re early in planning
              or ready for construction.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name" isRequired>
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" isRequired>
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="City of Fort Wayne, INDOT, developer, etc."
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(555) 555-5555"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="projectType">
                Project type or location
              </Label>
              <Input
                id="projectType"
                name="projectType"
                placeholder="Roadway, trail, site development, bridge, etc."
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" isRequired>
                How can APEX help?
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Share a short description of your project, anticipated timeline, and any known constraints."
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-primary/90 transition-colors">
                {isSubmitting ? (
                  <>
                    <Icon
                      name="LoaderCircle"
                      className="animate-spin"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Submit inquiry
                    <Icon name="ArrowRight" />
                  </>
                )}
              </Button>

              <p className="text-xs md:text-sm text-zinc-500 max-w-md">
                By submitting, you agree that APEX may contact you
                about this inquiry. We typically respond within 2–4
                business days.
              </p>
            </div>

            {hasSubmitted && (
              <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs md:text-sm text-emerald-900 flex items-center gap-2">
                <Icon name="CircleCheck" className="h-4 w-4" />
                <span>
                  Thank you — your message has been sent. We&apos;ll
                  be in touch soon.
                </span>
              </div>
            )}
          </form>
        </div>

        {/* Contact details */}
        <div className="space-y-6 text-sm md:text-base text-zinc-700">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-zinc-900">
              Contact details
            </h2>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              Prefer a direct conversation? Reach out to our office
              and we&apos;ll connect you with the right team members
              for your project.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl bg-white shadow-sm border border-zinc-200/70 p-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Phone
              </div>
              <p className="mt-1 text-sm text-zinc-700">
                (260) 755-5993
              </p>
              <p className="mt-0.5 text-sm text-zinc-700">
                Indianapolis: (317) 992-1644
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Email
              </div>
              <p className="mt-1 text-sm text-zinc-700">
                info@apexsurveying.net
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Offices
              </div>
              <p className="mt-1 text-sm text-zinc-700">
                <span className="font-medium">Fort Wayne:</span> 1313
                Broadway St., Fort Wayne, IN 46802
              </p>
              <p className="mt-1 text-sm text-zinc-700">
                <span className="font-medium">Indianapolis:</span>{' '}
                6330 E. 75th St. Suite 214, Indianapolis, IN 46214
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white shadow-sm border border-zinc-200/70 p-5 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">
              Office hours
            </div>
            <p className="text-sm text-zinc-700">
              Monday–Friday: 7:00am – 5:00pm
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow-sm border border-zinc-200/70 p-5 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">
              Typical projects
            </div>
            <p className="text-sm text-zinc-700">
              INDOT and municipal transportation work, roadway and
              trail improvements, site development, and associated
              surveying and construction staking.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { ContactForm };
