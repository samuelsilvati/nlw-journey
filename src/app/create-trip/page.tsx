'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { DateRange } from 'react-day-picker'

import { ConfirmTripModal } from '@/components/confirm-trip-modal'
import { InviteGuestsModal } from '@/components/invite-guests-modal'
import { DestinationAndDateStep } from '@/components/steps/destination-and-date-step'
import { InviteGuestsStep } from '@/components/steps/invite-guests-step'
import { api } from '@/lib/axios'
export default function CreateTripPage() {
  const router = useRouter()
  const [isGuestsInputVisible, setIsGuestsInputVisible] = useState(false)
  const [isGuestsModalVisible, setIsGuestsModalVisible] = useState(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartAndDates, setEventStartAndDates] = useState<
    DateRange | undefined
  >()

  const [emailsToInvite, setEmailsToInvite] = useState(['user@example.com'])
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState(false)

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

  function openConfirmationModal() {
    setIsConfirmationModalVisible(true)
  }
  function closeConfirmationModal() {
    setIsConfirmationModalVisible(false)
  }

  function addEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')
    if (!email) return

    if (emailsToInvite.includes(email as string)) {
      return
    }
    setEmailsToInvite([...emailsToInvite, email as string])

    event.currentTarget?.reset()
  }

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(
      'destination',
      destination,
      'emails',
      emailsToInvite,
      'eventStartAndDates',
      eventStartAndDates,
      'name',
      ownerName,
      'email',
      ownerEmail,
    )
    if (!destination) return
    if (!eventStartAndDates?.from || !eventStartAndDates?.to) return
    if (emailsToInvite.length === 0) return
    if (!ownerName) return
    if (!ownerEmail) return

    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartAndDates?.from,
      ends_at: eventStartAndDates?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })

    if (response.data.tripId) {
      router.push(`/trip-details/${response.data.tripId}`)
    }
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
          <DestinationAndDateStep
            isGuestsInputVisible={isGuestsInputVisible}
            openGuestsInput={openGuestsInput}
            closeGuestsInput={closeGuestsInput}
            setDestination={setDestination}
            setEventStartAndDates={setEventStartAndDates}
            eventStartAndDates={eventStartAndDates}
          />

          {isGuestsInputVisible && (
            <InviteGuestsStep
              openGuestsModal={openGuestsModal}
              emailsToInvite={emailsToInvite}
              openConfirmationModal={openConfirmationModal}
            />
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
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addEmailToInvite={addEmailToInvite}
          removeEmailToInvite={removeEmailToInvite}
          closeGuestsModal={closeGuestsModal}
        />
      )}

      {isConfirmationModalVisible && (
        <ConfirmTripModal
          closeConfirmationModal={closeConfirmationModal}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  )
}
