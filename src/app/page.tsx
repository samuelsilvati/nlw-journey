'use client'
import Image from 'next/image'
import { useState } from 'react'

import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from 'lucide-react'
export default function Home() {
  const [isGuestsInputVisible, setIsGuestsInputVisible] = useState(false)
  const [isGuestsModalVisible, setIsGuestsModalVisible] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState(['user@example.com'])

  function openGuestsInput() {
    setIsGuestsInputVisible(true)
  }
  function closeGuestsInput() {
    setIsGuestsInputVisible(false)
  }

  function openGuestsModal() {
    setIsGuestsModalVisible(true)
  }
  function closeGuestsModal() {
    setIsGuestsModalVisible(false)
  }

  function addEmailToInvite(event: FormDataEvent) {
    event.preventDefault()

    const data = new FormData(event.currentTarget as HTMLFormElement)
    const email = data.get('email')
    if (!email) return

    if (emailsToInvite.includes(email as string)) {
      return
    }
    setEmailsToInvite([...emailsToInvite, email as string])

    event.currentTarget?.reset()
  }

  function removeEmailToInvite(email: string) {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email))
  }
  return (
    <div className="flex h-screen items-center justify-center bg-pattern bg-center bg-no-repeat px-6">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src="/assets/logo.svg"
            alt="plann.er"
            width={180}
            height={5}
          ></Image>
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="h-5 w-5 text-zinc-400" />
              <input
                disabled={isGuestsInputVisible}
                className="placeholder-bg-zinc-400 flex-1 bg-transparent text-lg outline-none"
                type="text"
                placeholder="Para onde você vai"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-zinc-400" />
              <input
                disabled={isGuestsInputVisible}
                className="placeholder-bg-zinc-400 w-40 bg-transparent text-lg outline-none"
                type="text"
                placeholder="Quando?"
              />
            </div>
            <div className="h-6 w-px bg-zinc-800"></div>
            {!isGuestsInputVisible ? (
              <button
                type="button"
                onClick={openGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-opacity hover:opacity-90"
              >
                Continuar <ArrowRight className="h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={closeGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-opacity hover:opacity-90"
              >
                Alterar local e data <Settings2 className="h-5 w-5" />
              </button>
            )}
          </div>

          {isGuestsInputVisible && (
            <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
              <button
                type="button"
                className="flex flex-1 items-center gap-2 text-left"
                onClick={openGuestsModal}
              >
                <UserRoundPlus className="h-5 w-5 text-zinc-400" />
                <span className="flex-1 text-lg text-zinc-400">
                  Quem estará na viagem
                </span>
              </button>
              <div className="h-6 w-px bg-zinc-800"></div>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-opacity hover:opacity-90"
              >
                Confirmar viagem <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>{' '}
          .
        </p>
      </div>
      {isGuestsModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 ">
          <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button type="button" onClick={closeGuestsModal}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => {
                return (
                  <div
                    key={email}
                    className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
                  >
                    <span className="text-zinc-300">{email}</span>
                    <button
                      type="button"
                      onClick={() => removeEmailToInvite(email)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                )
              })}
            </div>
            <div className="h-px w-full bg-zinc-800"></div>
            <form
              onSubmit={() => addEmailToInvite}
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

              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-opacity hover:opacity-90"
              >
                Convidar <Plus className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
