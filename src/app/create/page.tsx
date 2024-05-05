'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is a required field.' }),
  description: z.string().min(1, { message: 'Description is a required field.' }),
})

export default function CreateTask() {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    const { title, description } = value
    try {
      await fetch('/api/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      router.push('/')
      router.refresh()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className="flex justify-center min-h-screen items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="w-[700px]">
            <CardHeader>
              <CardTitle>Create Task</CardTitle>
              <CardDescription>Create your new Task in one-click.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-10">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="workout" {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>This is your Task title.</FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="1 hour workout at 4:00 p.m." {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>This is your Task description.</FormDescription>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Link href="/">Cancel</Link>
              </Button>
              <Button type="submit">Create</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  )
}
