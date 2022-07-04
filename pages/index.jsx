import Head from 'next/head'
import Image from 'next/image'
import MemoBannerGraphic from '../components/assets/graphics/BannerGraphic'

export default function Home() {
  return (
    <div className="h-[2000px]">
      <div className="min-w-[50px] flex-1">{/* <MemoBannerGraphic /> */}</div>
    </div>
  )
}
