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
  isFetchingOfficeInfo: boolean;
  hasFetchedOfficeInfo: boolean;
  fetchOfficeInfo: () => Promise<void>;
}

export const useOfficeInfoStore = create<OfficeInfoStore>((set, get) => ({
  officeInfo: null,
  isFetchingOfficeInfo: false,
  hasFetchedOfficeInfo: false,
  fetchOfficeInfo: async () => {
    const { officeInfo, isFetchingOfficeInfo, hasFetchedOfficeInfo } = get();
    if (officeInfo || isFetchingOfficeInfo || hasFetchedOfficeInfo) {
      return;
    }

    set({ isFetchingOfficeInfo: true });

    try {
      const response = await axios.get<OfficeInfoResponse>('http://localhost:9000/fetch-office-info');
      set({
        officeInfo: response.data,
        isFetchingOfficeInfo: false,
        hasFetchedOfficeInfo: true,
      });
    } catch (error) {
      set({ isFetchingOfficeInfo: false });
      console.error('Failed to fetch office info', error);
    }
  }
}))