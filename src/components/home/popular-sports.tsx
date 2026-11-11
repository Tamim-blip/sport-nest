import { popularSports } from "@/data/dummy-data";

export function PopularSports() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Popular Sports
          </h2>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground">
            From football to fitness, discover venues for the sports you love.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {popularSports.map((sport) => (
            <div
              key={sport.name}
              className="flex flex-col items-center gap-3 rounded-xl bg-card p-6 text-center ring-1 ring-foreground/10 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <sport.icon className="size-6" />
              </span>
              <div>
                <p className="text-sm font-semibold">{sport.name}</p>
                <p className="text-xs text-muted-foreground">
                  {sport.players}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
