import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex fixed w-[100vw] items-center h-[60px] px-4 border-b bg-white">
      <div className="flex-1 min-w-0">
        <h1 className="font-bold text-xl">
          <Link href="/">Task List app</Link>
        </h1>
      </div>
      <Button size="sm">
        <Link href="/create">New Task</Link>
      </Button>
    </header>
  )
}
