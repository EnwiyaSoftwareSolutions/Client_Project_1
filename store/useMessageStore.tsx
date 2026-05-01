import { create } from "zustand"
import axios from "axios"

type ContactFormValues = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type MessageStore = {
  messages: ContactFormValues[]
  isLoading: boolean
  error: string | null

  setMessage: (msg: ContactFormValues) => void
  clearMessage: () => void
  sendMSG: (msg: ContactFormValues) => Promise<void>
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  isLoading: false,
  error: null,

  setMessage: (msg: ContactFormValues) => {
    set((state) => ({ messages: [...state.messages, msg] }));
  },

  clearMessage: () => {
    set({ messages: [], error: null });
  },

  sendMSG: async (msg: ContactFormValues) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post('http://localhost:9000/send-email', msg, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = response.data;
      console.log('Message Sent successful:', result);
      set({ isLoading: false });
    } catch (err) {
      console.error('Message Sent failed:', err);
      const errorMessage = err instanceof axios.AxiosError
        ? err.response?.data?.message || err.message
        : 'An unknown error occurred';
      set({ error: errorMessage, isLoading: false });
    }
  },
}));