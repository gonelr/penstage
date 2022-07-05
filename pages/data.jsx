import MemoBrandGraphic from '../components/assets/graphics/BrandGraphic'
import MemoDesignGraphic from '../components/assets/graphics/DesignGraphic'
import MemoWebGraphic from '../components/assets/graphics/WebGraphic'
import MemoStoryGraphic from '../components/assets/graphics/StoryGraphic'

export const cardData = [
  {
    title: 'UI/Design',
    description:
      "I'm a graphic designer and I love to create beautiful and functional designs.",
    graphic: <MemoDesignGraphic />,
  },
  {
    title: 'Development',
    description:
      "I'm a web developer and I love to create functional websites.",
    graphic: <MemoWebGraphic />,
  },
  {
    title: 'Storytelling',
    description: "I'm a storyteller and I love to tell stories.",
    graphic: <MemoStoryGraphic />,
  },

  {
    title: 'Brand',
    description:
      "I'm a brand designer and I love to create beautiful and functional designs.",
    graphic: <MemoBrandGraphic />,
    mostPopular: true,
  },
]
