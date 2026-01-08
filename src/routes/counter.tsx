import { createFileRoute, Link } from '@tanstack/react-router'
import { Counter } from '@/features/counter/counter-component'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/counter')({
  component: CounterPage,
})

function CounterPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Link to="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      <div className="rounded-lg border p-6">
        <h1 className="mb-6 text-3xl font-bold">Counter Page</h1>
        <Counter />
      </div>
    </div>
  )
}
