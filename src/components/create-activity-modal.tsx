import { Button } from './button'

import { X, Tag, Calendar } from 'lucide-react'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal(props: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 ">
      <div className="w-[640px] space-y-2.5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={props.closeCreateActivityModal}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>
        <div className="flex flex-wrap gap-2"></div>
        <form className="space-y-3">
          <div className="flex h-14 items-center gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-4">
            <Tag className="h-5 w-5 text-zinc-400" />
            <input
              className="placeholder-bg-zinc-400 flex-1 bg-transparent text-lg outline-none"
              name="title"
              placeholder="Qual a atividade?"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-4">
              <Calendar className="h-5 w-5 text-zinc-400" />
              <input
                type="datetime-local"
                className="placeholder-bg-zinc-400 flex-1 bg-transparent text-lg outline-none [color-scheme:dark] placeholder:text-zinc-500"
                name="occurs_at"
                placeholder="Data e horário da atividade"
              />
            </div>
          </div>

          <Button type="submit" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
