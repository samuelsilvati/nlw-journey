import { Button } from './button'

import { Link2, Plus } from 'lucide-react'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block truncate text-xs text-zinc-400 transition-opacity hover:opacity-80"
            >
              https://www.airbnb.com.br/rooms/1232111123232131232312312312
            </a>
          </div>
          <Link2 className="h-5 w-5 text-zinc-400" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block truncate text-xs text-zinc-400 transition-opacity hover:opacity-80"
            >
              https://www.airbnb.com.br/rooms/1232111123232131232312312312
            </a>
          </div>
          <Link2 className="h-5 w-5 text-zinc-400" />
        </div>
      </div>
      <Button size="full" variant="secondary" type="button">
        <Plus className="h-5 w-5" /> Cadastrar novo link
      </Button>
    </div>
  )
}
