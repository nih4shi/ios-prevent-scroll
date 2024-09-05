import ModalBody from './components/ModalBody'
import ModalHtmlAndBody from './components/ModalHtmlAndBody'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 p-4">
      <div className="flex flex-col gap-8 md:mx-auto md:max-w-3xl">
        <ModalBody></ModalBody>
        <ModalHtmlAndBody></ModalHtmlAndBody>
      </div>
      <div className="mt-32">
        {[...Array(100)].map((_, index) => (
          <div key={index}>スクロール確認用</div>
        ))}
      </div>
    </main>
  )
}
