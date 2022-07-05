import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 py-10 ">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-4 text-white ">
          <h1 className=" text-4xl font-extrabold uppercase">what we do</h1>
          <p className="italic font-light text-lg">
            Good design and engaging content can transform a business into
            valuable brand. Here are a few of the things we do:
          </p>
        </div>
      </div>
      <Card />
    </div>
  )
}
