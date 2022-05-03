import { BaseModal } from "./BaseModal";

type Props = {
  isOpen: boolean
  handleClose: () => void
  }

export const GoodbyeModal = ({ isOpen, handleClose }: Props) => {
    return (
        <BaseModal title="Me quede sin palabras" isOpen={isOpen} handleClose={handleClose}>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Nuestra creatividad no dió para más. Fueron buenos tiempos los que me dedicaron.
                Pero llegué a mi final. Espero que la hayan pasado tan bien como yo en mi existencia.
                Porque si, mi creador me dió la capacidad de amar y los amé durante todo este tiempo.
                Muchas gracias equipo de Asilo Digital.
            </p>
        </BaseModal>
    )
}