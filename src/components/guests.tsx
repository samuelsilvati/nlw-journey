import { Button } from './button'

import { CircleDashed, UserCog } from 'lucide-react'

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block truncate text-xs text-zinc-400">
              jessica.white44@yahoo.com
            </span>
          </div>
          <CircleDashed className="h-5 w-5 text-zinc-400" />
        </div>
      </div>

      <Button size="full" variant="secondary" type="button">
        <UserCog className="h-5 w-5" /> Gerenciar convidados
      </Button>
    </div>
  )
}
