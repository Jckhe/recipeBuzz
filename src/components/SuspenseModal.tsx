import { SuspenseModalProps } from "@/types/Component.types"
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Spinner } from "@chakra-ui/react"
import React from "react"


const SuspenseModal = ({isOpen, onClose}: SuspenseModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent maxH="120%" minH="100%" maxW="80%" p={5}>
      <ModalCloseButton />
      <ModalBody justifyContent="center" display="flex" alignItems="center" gap={3} flexDirection="column">
        <Spinner size="xl" />
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}


export default React.memo(SuspenseModal);