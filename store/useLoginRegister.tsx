import {create} from 'zustand';
import axios from 'axios';

type LoginRegisterStore ={
    username: string;
    password: string;
    isLoading: boolean;
    setLogin: (username: string, password: string) => void;
}

export const useLoginStore = create<LoginRegisterStore>((set) => ({
    username: '',
    password: '',
    isLoading: false,
    setLogin: async (username:string, password:string) => {
        set({ username, password, isLoading: true });
        try{
          const response = await axios.post('http://localhost:9000/login', { username, password }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
             const result = response.data;
      console.log('Message Sent successful:', result);
      set({ isLoading: false });

        }catch(err){
                console.error('Login/Register failed:', err);
        }
    }
}));