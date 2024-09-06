import ModalBody from './components/ModalBody'
import ModalHtmlAndBody from './components/ModalHtmlAndBody'
import ModalReactRemoveScroll from './components/ModalReactRemoveScroll'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 p-4">
      <div className="mt-32">
        {[...Array(50)].map((_, index) => (
          <div key={index}>↓</div>
        ))}
      </div>
      <div className="flex flex-col gap-8 md:mx-auto md:max-w-3xl">
        <ModalBody></ModalBody>
        <ModalHtmlAndBody></ModalHtmlAndBody>
        <ModalReactRemoveScroll></ModalReactRemoveScroll>
      </div>
      <div className="mt-32">
        {[...Array(50)].map((_, index) => (
          <div key={index}>↑</div>
        ))}
      </div>
    </main>
  )
}
