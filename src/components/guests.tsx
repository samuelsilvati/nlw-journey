import { useState, useEffect } from 'react'

import { Button } from './button'

import { api } from '@/lib/axios'
import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'

interface GuestsProps {
  id: string
}

interface ParticipantInterface {
  id: string
  name: string
  email: string
  is_confirmed: boolean
}

export function Guests(props: GuestsProps) {
  const [participants, setParticipants] = useState<ParticipantInterface[]>([])
  useEffect(() => {
    api.get(`/trips/${props.id}/participants`).then((response) => {
      setParticipants(response.data.participants)
    })
  }, [props.id])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        {participants &&
          participants.map((participant) => {
            return (
              <div
                key={participant.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex-1 space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    {participant.name}
                  </span>
                  <span className="block truncate text-xs text-zinc-400">
                    {participant.email}
                  </span>
                </div>
                {participant.is_confirmed ? (
                  <CircleCheck className="h-5 w-5 text-lime-300" />
                ) : (
                  <CircleDashed className="h-5 w-5 text-zinc-400" />
                )}
              </div>
            )
          })}
      </div>

      <Button size="full" variant="secondary" type="button">
        <UserCog className="h-5 w-5" /> Gerenciar convidados
      </Button>
    </div>
  )
}
