import ModalHtmlAndBody from './components/ModalHtmlAndBody'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 p-4">
      <div className="flex flex-col gap-2 md:mx-auto md:max-w-3xl">
        <ModalHtmlAndBody></ModalHtmlAndBody>
      </div>
      <div className="mt-32">
        <div>スクロール確認用</div>
        <div>スクロール確認用</div>
        <div>スクロール確認用</div>
        <div>スクロール確認用</div>
        <div>スクロール確認用</div>
        <div>スクロール確認用</div>
        <div>スクロール確認用</div>
      </div>
    </main>
  )
}
