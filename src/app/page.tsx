import Card from './components/Card'

const CARDS: CARD[] = [...Array(10)].map((_, index) => {
  return {
    title: `title ${index + 1}`,
    text: `text ${index + 1}`,
  }
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 p-4">
      <div className="flex flex-col gap-2 md:mx-auto md:max-w-3xl">
        {CARDS.map((card, index) => (
          <Card key={`${card}-${index}`} card={card}></Card>
        ))}
      </div>
    </main>
  )
}
