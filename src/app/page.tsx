import { TaskType } from '@/app/types/task'
import { Task } from '@/components/layouts/Task'
import { AlertDialog } from '@/components/ui/alert-dialog'
import { config } from '@/lib/config'
import { headers } from 'next/headers'

async function getTasks(host: string) {
  const response = await fetch(`${config.apiPrefix}${host}/api/task`, {
    cache: 'no-store',
  })
  const tasks: TaskType[] = await response.json()

  return tasks
}

export default async function Home() {
  const host = headers().get('host')
  const tasks = await getTasks(host!)

  return (
    <main className="flex-1 pt-[60px] grid max-w-[700px] min-h-[calc(100vh_-_1rem)] divide-y p-4 text-sm lg:min-h-[calc(100vh_-_1.5rem)]">
      <div className="flex-1 overflow-auto py-4 lg:py-6">
        {tasks.map((task: TaskType) => {
          return (
            <AlertDialog key={task.id}>
              <Task id={task.id} title={task.title} description={task.description} />
            </AlertDialog>
          )
        })}
      </div>
    </main>
  )
}
