interface ServiceCardProps {
  title: string;
  description: string;
  details: string[];
}

export function ServiceCard({ title, description, details }: ServiceCardProps) {
  return (
    <div className="relative">
      <div className="p-5 sm:p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-3 sm:mb-4">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4">
          {description}
        </p>
        <ul>
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
  );
}
