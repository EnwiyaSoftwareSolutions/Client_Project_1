import {create} from 'zustand'
import axios from 'axios';

export type OfficeInfo = {
  id?:number;
  $id?: string;
  office_name?: string;
  name?: string;
  mailing_address:string;
  office_address:string;
  office_phone_number:string;
  office_email:string;
}

export type OfficeInfoResponse = {
  total: number;
  documents: OfficeInfo[];
}

type OfficeInfoStore = {
  officeInfo: OfficeInfoResponse | null;
  fetchOfficeInfo: () => Promise<void>;
}

export const useOfficeInfoStore = create<OfficeInfoStore>((set) => ({
  officeInfo: null,
  fetchOfficeInfo: async () => {
    try {
      const response = await axios.get<OfficeInfoResponse>('http://localhost:9000/fetch-office-info');
      set({officeInfo: response.data});
    } catch (error) {
      console.error('Failed to fetch office info', error);
    }
  }
}))