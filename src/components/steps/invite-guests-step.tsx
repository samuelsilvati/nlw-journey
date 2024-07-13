import { Button } from '../button'

import { UserRoundPlus, ArrowRight } from 'lucide-react'

interface InviteGuestsStepProps {
  openGuestsModal: () => void
  emailsToInvite: string[]
  openConfirmationModal: () => void
}

export function InviteGuestsStep(props: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button
        type="button"
        className="flex flex-1 items-center gap-2 text-left"
        onClick={props.openGuestsModal}
      >
        <UserRoundPlus className="h-5 w-5 text-zinc-400" />
        <span className="flex-1 text-lg text-zinc-400">
          {props.emailsToInvite.length > 0 ? (
            <span className="flex-1 text-lg text-zinc-100">
              {props.emailsToInvite.length === 1 ? (
                <>1 pessoa convidada</>
              ) : (
                <>{props.emailsToInvite.length} pessoas convidadas </>
              )}
            </span>
          ) : (
            <span className="flex-1 text-lg text-zinc-400">
              Quem estará na viagem
            </span>
          )}
        </span>
      </button>
      <div className="h-6 w-px bg-zinc-800"></div>

      <Button type="button" onClick={props.openConfirmationModal}>
        Confirmar viagem <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
