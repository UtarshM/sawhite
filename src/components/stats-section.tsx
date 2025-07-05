const stats = [
  {
    value: "460+",
    label: "Students engaged in hands on learning during our training.",
  },
  {
    value: "5+",
    label: "We have provided training to corporate clients.",
  },
  {
    value: "29+",
    label: "Successfully completed Agentic AI and AI automation solutions.",
  },
  {
    value: "100+",
    label: "Certified by Neno Technology in Agentic AI and No-Code Automation.",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container animate-in fade-in duration-500 delay-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <h3 className="text-5xl lg:text-6xl font-bold font-headline text-foreground">{stat.value}</h3>
              <p className="text-muted-foreground text-sm min-h-[4rem]">{stat.label}</p>
              <div className="w-1/2 pt-4">
                <div className="border-t border-border/50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
