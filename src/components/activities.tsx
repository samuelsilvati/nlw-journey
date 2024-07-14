import { useState, useEffect } from 'react'

import { api } from '@/lib/axios'
import { format } from 'date-fns/format'
import { ptBR } from 'date-fns/locale/pt-BR'
import { CircleCheck } from 'lucide-react'

interface ActivityProps {
  id: string
}

interface ActivitiesInterface {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities(props: ActivityProps) {
  const [activities, setActivities] = useState<ActivitiesInterface[]>([])
  useEffect(() => {
    api.get(`/trips/${props.id}/activities`).then((response) => {
      setActivities(response.data.activities)
    })
  }, [props.id])
  return (
    <div className="space-y-8">
      <div className="space-y-5">
        {activities &&
          activities.map((category) => {
            return (
              <div key={category.date}>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-semibold text-zinc-400">
                    Dia {format(category.date, 'd')}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {format(category.date, 'EEEE', { locale: ptBR })}
                  </span>
                </div>
                {category.activities.length > 0 ? (
                  <div>
                    {category.activities.map((activity) => {
                      return (
                        <div key={activity.id} className=" space-y-2.5">
                          <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                            <CircleCheck className="h-5 w-5 text-lime-300" />
                            <span className="text-zinc-100">
                              {activity.title}
                            </span>
                            <span className="ml-auto text-sm text-zinc-400">
                              {format(new Date(activity.occurs_at), 'HH:mm')}h
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-zinc-500">
                    Nenhuma atividade cadastrada nessa data.
                  </p>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
