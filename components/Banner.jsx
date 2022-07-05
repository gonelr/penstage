import MemoBannerGraphic from './assets/graphics/BannerGraphic'

const Banner = () => {
  return (
    <section className="h-full min-h-[60px] mb-8 xl:mb-24 mx-aut0 max-w-[1300px] px-4">
      <div className="flex flex-col-reverse lg:flex-row lg:items-start justify-center">
        <div className=" lg:ml-[135px] flex flex-col items-center lg:items-start lg:mt-12 text-center lg:text-left px-4 lg:px-0">
          <h1p className="text-4xl font-extrabold lg:text-5xl xl:text-6xl mt-6 lg:mt-0 tracking-wide">
            <span className="text-accent">Grow </span> your business with us
          </h1p>
          <p className="text-xl mt-4 font-light tracking-wider">
            We are a team of UX/graphic designers and developers. We create
            brand small for businesses and startups.
          </p>
        </div>
        <div className="w-[270px] xs:min-w-[500px] md:min-w-[600px] mx-auto lg:pl-6 md:px-24 ">
          <MemoBannerGraphic />
        </div>
      </div>
    </section>
  )
}
export default Banner
