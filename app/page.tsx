import Headset from '@/components/headset'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-10 relative top-0 left-0">
      <h1 className="text-8xl font-bold text-white">vr check-in</h1>
      <div className="absolute top-0 right-0 h-full flex flex-col items-center bg-zinc-700 p-4 w-96">
        <h2 className="text-6xl text-white text-center font-bold">queue</h2>
      </div>
      <div className="grid grid-cols-2 gap-14 w-[75vw]">
        <Headset accent="indigo" name="headset 1"/>
        <Headset accent="emerald" name="headset 2"/>
        <Headset accent="rose" name="headset 3"/>
        <Headset accent="amber" name="headset 4"/>
      </div>
    </div>
  )
}
