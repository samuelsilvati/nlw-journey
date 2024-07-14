import { FormEvent } from 'react'

import { Button } from './button'

import { X, AtSign, Plus } from 'lucide-react'

interface InviteGuestsModalProps {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  addEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailToInvite: (email: string) => void
}
export function InviteGuestsModal(props: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 ">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button type="button" onClick={props.closeGuestsModal}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {props.emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  type="button"
                  onClick={() => props.removeEmailToInvite(email)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )
          })}
        </div>
        <div className="h-px w-full bg-zinc-800"></div>
        <form
          onSubmit={props.addEmailToInvite}
          className="flex items-center gap-2 rounded-md border-zinc-800 bg-zinc-950 p-2.5"
        >
          <div className="flex w-full items-center gap-2 px-2">
            <AtSign className="h-5 w-5 text-zinc-400" />
            <input
              className="placeholder-bg-zinc-400 flex-1 bg-transparent text-lg outline-none"
              type="email"
              name="email"
              placeholder="Digite o email do convidado"
            />
          </div>

          <Button type="submit">
            Convidar <Plus className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
