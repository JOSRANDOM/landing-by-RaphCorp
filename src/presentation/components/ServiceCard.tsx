'use client';

interface ServiceCardProps {
  title: string;
  description: string;
  details: string[];
}

export function ServiceCard({ title, description, details }: ServiceCardProps) {
  return (
    <div className="relative">
      <div className="group p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl relative z-0 hover:z-20">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
          <ul className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-0 group-hover:pt-4">
            {details.map((detail, index) => (
              <li
                key={index}
                className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2 py-1"
              >
                <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
