import ExampleAddOverflowHiddenToBody from './components/ExampleAddOverflowHiddenToBody'
import ExampleAddOverflowHiddenToHtmlAndBody from './components/ExampleAddOverflowHiddenToHtmlAndBody'
import ExampleReactRemoveScroll from './components/ExampleReactRemoveScroll'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 p-4">
      <div className="text-center">
        {[...Array(50)].map((_, index) => (
          <div key={index}>↓</div>
        ))}
      </div>
      <div className="my-16 flex flex-col gap-8 md:mx-auto md:max-w-3xl">
        <ExampleAddOverflowHiddenToBody></ExampleAddOverflowHiddenToBody>
        <ExampleAddOverflowHiddenToHtmlAndBody></ExampleAddOverflowHiddenToHtmlAndBody>
        <ExampleReactRemoveScroll></ExampleReactRemoveScroll>
      </div>
      <div className="text-center">
        {[...Array(50)].map((_, index) => (
          <div key={index}>↑</div>
        ))}
      </div>
    </main>
  )
}
