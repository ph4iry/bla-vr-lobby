// const bgColors = ['bg-indigo-300', 'bg-emerald-300', 'bg-rose-500', 'bg-amber-400'];
const colors = [
  { bg: 'bg-indigo-300', text: 'text-indigo-300' },
  { bg: 'bg-emerald-300', text: 'text-emerald-300' },
  { bg: 'bg-rose-500', text: 'text-rose-500' },
  { bg: 'bg-amber-400', text: 'text-amber-400' },
];

const mappedColors = new Map()
  .set('indigo', colors[0])
  .set('emerald', colors[1])
  .set('rose', colors[2])
  .set('amber', colors[3]);

export default function Headset({
  accent,
  name,
}: {
  accent: 'indigo' | 'emerald' | 'rose' | 'amber',
  name: string
}) {
  return (
    <div className="bg-zinc-700 p-4 rounded w-full h-80">
      <span className="top-headset-bar flex justify-between items-center">
        <p className={`text-5xl font-bold ${mappedColors.get(accent).text}`}>{name.toUpperCase()}</p>

        <span className="flex space-x-3">
          <p>power off</p>
          <p>select color</p>
        </span>
      </span>
      <div className="text-left text-white text-3xl font-bold">Jake P.</div>
      <div className="text-left text-white text-base font-semibold">+1 617 580 1915</div>
    </div>
  );
}