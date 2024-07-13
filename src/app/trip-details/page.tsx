'use client'
import { useState } from 'react'

import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from 'lucide-react'

export default function TripDetailsPage() {
  const [isCreateActivityModalVisible, setIsCreateActivityModalVisible] =
    useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalVisible(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalVisible(false)
  }
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-zinc-400" />
          <span className="text-base text-zinc-100">Fortaleza, Brasil</span>
        </div>

        <div className=" flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-zinc-400" />
            <span className="text-base text-zinc-100">17 a 23 de Agosto</span>
          </div>
          <div className="h-6 w-px bg-zinc-800"></div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-opacity hover:opacity-90"
          >
            Alterar local e data <Settings2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              type="button"
              className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-opacity hover:opacity-90"
            >
              <Plus className="h-5 w-5" /> Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-400">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-400">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className=" space-y-2.5">
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheck className="h-5 w-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="ml-auto text-sm text-zinc-400">08:00h</span>
                </div>
              </div>

              <div className=" space-y-2.5">
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheck className="h-5 w-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="ml-auto text-sm text-zinc-400">08:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva do AirBnB
                  </span>
                  <a
                    href="#"
                    className="block truncate text-xs text-zinc-400 transition-opacity hover:opacity-80"
                  >
                    https://www.airbnb.com.br/rooms/1232111123232131232312312312
                  </a>
                </div>
                <Link2 className="h-5 w-5 text-zinc-400" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva do AirBnB
                  </span>
                  <a
                    href="#"
                    className="block truncate text-xs text-zinc-400 transition-opacity hover:opacity-80"
                  >
                    https://www.airbnb.com.br/rooms/1232111123232131232312312312
                  </a>
                </div>
                <Link2 className="h-5 w-5 text-zinc-400" />
              </div>
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-opacity hover:opacity-90"
            >
              <Plus className="h-5 w-5" /> Cadastrar novo link
            </button>
          </div>
          <div className="h-px w-full bg-zinc-800"></div>
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
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-opacity hover:opacity-90"
            >
              <UserCog className="h-5 w-5" /> Gerenciar convidados
            </button>
          </div>
        </div>
      </main>
      {isCreateActivityModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 ">
          <div className="w-[640px] space-y-2.5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <button type="button" onClick={closeCreateActivityModal}>
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

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 font-medium text-lime-950 transition-opacity hover:opacity-90"
              >
                Salvar atividade
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
