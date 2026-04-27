import {create} from 'zustand'
import axios from 'axios';

type Register = {
  full_name: string,
  user_email:string,
  user_phonenumber:string,
  is_client?: boolean,
  is_active?: boolean,
  timestamp?: string,
  created_at?: string,
}

type RegisterListResponse = {
  total: number,
  documents: Register[],
}

export type RegisterPayload = {
  full_name: string,
  user_email: string,
  user_phonenumber: string,
}

export type RegisterStore ={
  register: Register[],
  isLoading: boolean,
  isError:boolean,
  saveRegister: (payload: RegisterPayload) => Promise<void>
  fetchRegister: () => Promise<void>
}

export const userRegister = create<RegisterStore>((set) => ({
  register: [],
  isLoading: false,
  isError: false,
  saveRegister: async (payload: RegisterPayload): Promise<void> => {
    set({ isLoading: true, isError: false });
    try {
      const response = await axios.post<Register>('http://localhost:9000/client_register', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      set((state) => ({
        register: [...state.register, response.data],
        isLoading: false,
      }));
    } catch (error) {
      set({ isError: true, isLoading: false });
      throw error;
    }
  },
  fetchRegister: async ():Promise<void> => {
    set({ isLoading: true, isError: false });
    try {
      const response = await axios.get<Register[] | RegisterListResponse>('http://localhost:9000/fetch_users',{
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const registerData = Array.isArray(response.data)
        ? response.data
        : response.data.documents ?? [];

      set({ register: registerData, isLoading: false });
    } catch (error) {
      set({ isError: true, isLoading: false });
    }
  },
}));