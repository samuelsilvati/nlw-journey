import { useEffect, useState } from 'react'

import { Button } from './button'

import { api } from '@/lib/axios'
import { format } from 'date-fns'
import { Calendar, MapPin, Settings2 } from 'lucide-react'

interface DestinationAndDateHeaderInterface {
  id: string
}

interface TripInterface {
  id: string
  destination: string
  ends_at: string
  is_confirmed: boolean
  starts_at: string
}

export function DestinationAndDateHeader(
  props: DestinationAndDateHeaderInterface,
) {
  const [trip, setTrip] = useState<TripInterface | undefined>()
  useEffect(() => {
    api.get(`/trips/${props.id}`).then((response) => {
      setTrip(response.data.trip)
    })
  }, [props.id])

  const displayedDate =
    trip?.starts_at && trip.ends_at
      ? format(trip.starts_at, "d ' de ' LLL")
          .concat(' até ')
          .concat(format(trip.ends_at, "d ' de ' LLL"))
      : null

  return (
    <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-zinc-400" />
        <span className="text-base text-zinc-100">{trip?.destination}</span>
      </div>

      <div className=" flex items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-zinc-400" />
          <span className="text-base text-zinc-100">{displayedDate}</span>
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
