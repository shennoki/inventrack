'use client'

import { TaskType } from '@/app/types/task'
import { ConfirmDialog } from '@/components/layouts/ConfirmDialog'
import { AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TrashIcon } from '@/components/ui/icons/TrashIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { EditIcon } from '../ui/icons/EditIcon'

export const Task: FC<TaskType> = ({ id, title, description }) => {
  const [isDone, setIsDone] = useState<boolean>(false)

  const router = useRouter()

  const handleDone = () => {
    setIsDone(!isDone)
  }

  const handleDelete = async () => {
    try {
      await fetch('/api/task', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
      router.refresh()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex items-center gap-4 p-4">
      <Checkbox className="mx-auto" id="task1" onCheckedChange={handleDone} />
      <div className={`flex-1 min-w-0 ${isDone && 'line-through'}`}>
        <h3 className="font-medium leading-none">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <Button className="rounded-full w-8 h-8" size="icon">
        <Link href={`edit/${id}`}>
          <EditIcon className="w-4 h-4" />
        </Link>
      </Button>
      <AlertDialogTrigger asChild>
        <Button className="rounded-full w-8 h-8" size="icon" variant="destructive">
          <TrashIcon className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <ConfirmDialog handleDelete={handleDelete} />
    </div>
  )
}
