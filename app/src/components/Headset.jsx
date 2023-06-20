export default function Headset({ name }) {
  return (
    <div className="border rounded border-neutral-700 p-4 text-center">
      <span className="text-3xl font-bold px-8 my-4 border-b border-neutral-700">{name}</span>
      <div className="px-8 py-4 space-y-2">
        <div className="timer w-48 h-48 justify-center items-center">
        </div>
        <p className="text-3xl">player name</p>
        <p className="text-xl">phone number</p>
      </div>
    </div>
  )
}