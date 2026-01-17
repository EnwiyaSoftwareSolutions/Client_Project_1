import {create} from 'zustand';

interface MessageState {
    name:string,
    email:string,
    phone:string,
    subject:string,
    message: string;
    setMessage: (msg: string) => void;
}

export const useMessageStore = create<MessageState>((set)=>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',

    setMessage: (msg: string) => set({message: msg}),
}));