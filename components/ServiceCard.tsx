import type { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="glass-card h-full">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-navy">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
          <p className="mt-3 text-base text-slate-600">{description}</p>
        </div>
      </div>
    </article>
  );
}
