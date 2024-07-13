import { Button } from './button'

import { Calendar, MapPin, Settings2 } from 'lucide-react'

export function DestinationAndDateHeader() {
  return (
    <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-zinc-400" />
        <span className="text-base text-zinc-100">Fortaleza, Brasil</span>
      </div>

      <div className=" flex items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-zinc-400" />
          <span className="text-base text-zinc-100">17 a 23 de Agosto</span>
        </div>
        <div className="h-6 w-px bg-zinc-800"></div>
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            alert('Alterar local e data')
          }}
        >
          Alterar local e data <Settings2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
