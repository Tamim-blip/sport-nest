import { whyChooseUs } from "@/data/dummy-data";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Why Choose SportNest
          </h2>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground">
            We make booking a game as easy as playing one.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((feature) => (
            <div
              key={feature.title}
              className="space-y-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="size-5" />
              </span>
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
