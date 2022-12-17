import { defineStore } from 'pinia'

export const utilStore = defineStore('auth', {
    state: () => ({ 
        modalState: false,
        hardwareModalState: false,
        credModal: false,
    }),
    getters: {
      isOpen: (store) => {
        if (store.modalState) return true
        return false
      },
      hardwareModalIsOpen: (store) => {
        if (store.hardwareModalState) return true
        return false
      },
      isCredModalOpen: (store) => {
        if (store.credModal) return true
        return false
      }
    },
    actions: {
      closeModal() {
        this.modalState = false
      },
      openModal() {
        this.modalState = true
      },
      closeHardwareModal() {
        this.hardwareModalState = false
      },
      openHardwareModal() {
        this.hardwareModalState = true
      },
      openCredModal() {
        this.credModal = true
      },
      closeCredModal() {
        this.credModal = false
      }
    }
  })
