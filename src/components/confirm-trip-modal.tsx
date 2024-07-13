import { FormEvent } from 'react'

import { X, User, Mail } from 'lucide-react'

interface ConfirmTripModalProps {
  closeConfirmationModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal(props: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 ">
      <div className="w-[640px] space-y-2.5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button type="button" onClick={props.closeConfirmationModal}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">Florianópolis</span> ,
            Brasil nas datas de{' '}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>
        <div className="flex flex-wrap gap-2"></div>
        <form onSubmit={props.createTrip} className="space-y-3">
          <div className="flex h-14 items-center gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-4">
            <User className="h-5 w-5 text-zinc-400" />
            <input
              className="placeholder-bg-zinc-400 flex-1 bg-transparent text-lg outline-none"
              name="name"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="flex h-14 items-center gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-4">
            <Mail className="h-5 w-5 text-zinc-400" />
            <input
              className="placeholder-bg-zinc-400 flex-1 bg-transparent text-lg outline-none"
              type="email"
              name="email"
              placeholder="Seu nome e-mail de convidado"
            />
          </div>

          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 font-medium text-lime-950 transition-opacity hover:opacity-90"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  )
}
