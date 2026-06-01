interface ServiceCardProps {
  title: string;
  description: string;
  details: string[];
  index: number;
}

export function ServiceCard({ title, description, details, index }: ServiceCardProps) {
  return (
    <div className="bg-[#04091C] p-8 lg:p-10 group hover:bg-[#060C22] transition-colors duration-300 cursor-default">
      <div className="flex items-start justify-between mb-8">
        <span className="text-[11px] font-mono text-[#4A5E8A] tracking-widest">
          {String(index).padStart(2, '0')}
        </span>
        <div className="w-5 h-5 border border-[#0F1C3F] group-hover:border-[#5B8DFF] flex items-center justify-center transition-all duration-300 rotate-45 group-hover:rotate-0">
          <div className="w-1.5 h-1.5 bg-[#1B2A4F] group-hover:bg-[#5B8DFF] transition-colors duration-300" />
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#5B8DFF] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[13px] text-[#7B8FBF] mb-8 leading-relaxed">{description}</p>

      <ul className="space-y-2.5">
        {details.map((d, i) => (
          <li key={i} className="flex items-start gap-3 text-[12px] text-[#6B80AA] group-hover:text-[#9AAFD0] transition-colors duration-300">
            <span className="text-[#5B8DFF] mt-0.5 flex-shrink-0">—</span>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
