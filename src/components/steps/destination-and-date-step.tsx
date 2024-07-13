import { Button } from '../button'

import { MapPin, Calendar, ArrowRight, Settings2 } from 'lucide-react'

interface DestinationAndDateStepProps {
  isGuestsInputVisible: boolean
  openGuestsInput: () => void
  closeGuestsInput: () => void
}

export function DestinationAndDateStep(props: DestinationAndDateStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="h-5 w-5 text-zinc-400" />
        <input
          disabled={props.isGuestsInputVisible}
          className="placeholder-bg-zinc-400 flex-1 bg-transparent text-lg outline-none"
          type="text"
          placeholder="Para onde você vai"
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="h-5 w-5 text-zinc-400" />
        <input
          disabled={props.isGuestsInputVisible}
          className="placeholder-bg-zinc-400 w-40 bg-transparent text-lg outline-none"
          type="text"
          placeholder="Quando?"
        />
      </div>
      <div className="h-6 w-px bg-zinc-800"></div>
      {!props.isGuestsInputVisible ? (
        <Button onClick={props.openGuestsInput}>
          Continuar <ArrowRight className="h-5 w-5" />
        </Button>
      ) : (
        <Button variant="secondary" onClick={props.closeGuestsInput}>
          Alterar local e data <Settings2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
