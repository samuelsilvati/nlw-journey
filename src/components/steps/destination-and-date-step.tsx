import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'

import { Button } from '../button'

import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'
import {
  MapPin,
  Calendar,
  ArrowRight,
  Settings2,
  X,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'

interface DestinationAndDateStepProps {
  isGuestsInputVisible: boolean
  eventStartAndDates: DateRange | undefined
  openGuestsInput: () => void
  closeGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep(props: DestinationAndDateStepProps) {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false)

  function openDateInput() {
    setDatePickerVisible(true)
  }

  function closeDatePicker() {
    setDatePickerVisible(false)
  }

  const displayedDate =
    props.eventStartAndDates &&
    props.eventStartAndDates.from &&
    props.eventStartAndDates.to
      ? format(props.eventStartAndDates.from, "d ' de ' LLL")
          .concat(' até ')
          .concat(format(props.eventStartAndDates.to, "d ' de ' LLL"))
      : null
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="h-5 w-5 text-zinc-400" />
        <input
          disabled={props.isGuestsInputVisible}
          className="placeholder-bg-zinc-400 flex-1 bg-transparent text-lg outline-none"
          type="text"
          placeholder="Para onde você vai"
          onChange={(e) => props.setDestination(e.target.value)}
        />
      </div>
      <button
        onClick={openDateInput}
        type="button"
        disabled={props.isGuestsInputVisible}
        className="flex w-[240px] items-center gap-2"
      >
        <Calendar className="h-5 w-5 text-zinc-400" />
        <span className="w-40 flex-1 text-left text-lg  text-zinc-400">
          {displayedDate || 'Quando?'}
        </span>
      </button>
      {isDatePickerVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 ">
          <div className="space-y-2.5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2"></div>
            <DayPicker
              mode="range"
              showOutsideDays={true}
              selected={props.eventStartAndDates}
              onSelect={props.setEventStartAndDates}
              classNames={{
                months:
                  'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                month: 'space-y-4',
                caption: 'flex justify-center pt-1 relative items-center',
                caption_label: 'text-sm font-medium',
                nav: 'space-x-1 flex items-center',
                nav_button:
                  'h-7 w-7 hover:opacity-100 shadow-sm hover:bg-accent hover:text-accent-foreground flex justify-center items-center rounded-md',

                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',

                head_row: 'flex',
                head_cell: 'w-8 font-normal text-[0.8rem]',
                row: 'flex w-full mt-2',

                cell: 'p-0',

                day: 'h-8 w-8 p-0 ease-in-out hover:rounded-md aria-selected:bg-lime-300 aria-selected:text-lime-950 aria-selected:hover:rounded-none',

                day_range_start:
                  'day-range-start rounded-l-md aria-selected:hover:rounded-l-md aria-selected:hover:bg-lime-500',
                day_range_end:
                  'day-range-end rounded-r-md aria-selected:hover:rounded-r-md aria-selected:hover:bg-lime-500',

                day_today:
                  'text-accent-foreground bg-zinc-950/95 rounded-md aria-selected:rounded-r-none',

                day_outside:
                  'day-outside text-muted-foreground opacity-50 aria-selected:opacity-100 aria-selected:bg-lime-300 aria-selected:text-lime-950',
                day_disabled: 'text-muted-foreground opacity-50',

                day_range_middle:
                  'aria-selected:bg-lime-300/90 rounded-none aria-selected:hover:bg-lime-500',
              }}
              components={{
                IconLeft: () => <ChevronLeftIcon className="size-5" />,
                IconRight: () => <ChevronRightIcon className="size-5" />,
              }}
            />
          </div>
        </div>
      )}

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
