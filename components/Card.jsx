import { cardData } from '../pages/data'

const Card = () => {
  return (
    <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-6 max-w-7xl px-4 mx-auto py-8 sm:px-6 lg:px-8">
      {cardData.map((card) => (
        <div
          key={card.title}
          className="border border-slate-200 dark:border-accent/90 dark:bg-brand-dark dark:shadow-accent/50 shadow-lg p-8 rounded-xl relative mt-4 lg:mt-0">
          <h1 className="text-xl font-bold tracking-wide">{card.title}</h1>
          <div>
            {card.mostPopular && (
              <p className="absolute top-0 -translate-y-1/2 bg-accent text-white text-sm font-semibold tracking-wide rounded-full shadow-md px-3 py-0.5">
                Most Popular
              </p>
            )}
          </div>
          <div className="dark:fill-white mt-4">{card.graphic}</div>

          <p className="text-sm leading-5 text-gray-500 mt-4 tracking-wide">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  )
}
export default Card
