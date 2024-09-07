'use client'

// 参考
// https://zenn.dev/tak_dcxi/articles/bbdb6cd9305ba4

import { useState } from 'react'
import ModalCreatedByDialog from '../ModalCreatedByDialog'

// ドキュメントの書字方向を取得し、縦書きかどうかを判定
const isVerticalWritingMode = (): boolean => {
  const writingMode = window.getComputedStyle(document.documentElement).writingMode
  return writingMode.includes('vertical')
}

// スクロールバーの幅を計算する
const getScrollBarSize = (): number => {
  const scrollBarXSize = window.innerHeight - document.body.clientHeight
  const scrollBarYSize = window.innerWidth - document.body.clientWidth
  return isVerticalWritingMode() ? scrollBarXSize : scrollBarYSize
}

// スクロール位置を取得する
const getScrollPosition = (fixed: boolean): number => {
  if (fixed) {
    return isVerticalWritingMode()
      ? (document.scrollingElement?.scrollLeft ?? 0)
      : (document.scrollingElement?.scrollTop ?? 0)
  }
  return parseInt(document.body.style.insetBlockStart || '0', 10)
}

type AllowedStyles =
  | 'blockSize'
  | 'insetInlineStart'
  | 'position'
  | 'insetBlockStart'
  | 'inlineSize'

// 背面固定のスタイルを適用する
const applyStyles = (scrollPosition: number, apply: boolean): void => {
  const styles: Partial<Record<AllowedStyles, string>> = {
    blockSize: '100dvb',
    insetInlineStart: '0',
    position: 'fixed',
    insetBlockStart: isVerticalWritingMode() ? `${scrollPosition}px` : `${scrollPosition * -1}px`,
    inlineSize: '100dvi',
  }
  Object.keys(styles).forEach((key) => {
    const styleKey = key as AllowedStyles
    document.body.style[styleKey] = apply ? styles[styleKey]! : ''
  })
}

// スクロール位置を元に戻す
const restorePosition = (scrollPosition: number): void => {
  const options: ScrollToOptions = {
    behavior: 'instant',
    [isVerticalWritingMode() ? 'left' : 'top']: isVerticalWritingMode()
      ? scrollPosition
      : scrollPosition * -1,
  }
  window.scrollTo(options)
}

// 背面を固定する
export const backfaceFixed = (fixed: boolean): void => {
  const scrollBarWidth = getScrollBarSize()
  const scrollPosition = getScrollPosition(fixed)
  document.body.style.paddingInlineEnd = fixed ? `${scrollBarWidth}px` : ''
  applyStyles(scrollPosition, fixed)
  if (!fixed) {
    restorePosition(scrollPosition)
  }
}

export default function ExamplePositionFixed() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    backfaceFixed(true)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    backfaceFixed(false)
    setIsModalOpen(false)
  }

  return (
    <div>
      <h2 className="mb-2 mt-4">position: fixed</h2>
      <button className="w-full rounded-lg bg-gray-700 p-2 text-white" onClick={openModal}>
        Open Modal
      </button>
      <ModalCreatedByDialog isOpen={isModalOpen} onClose={closeModal}>
        {[...Array(20)].map((_, index) => (
          <div key={index}>&lt;html&gt;と&lt;body&gt;にoverflow:hidden</div>
        ))}
      </ModalCreatedByDialog>
    </div>
  )
}
