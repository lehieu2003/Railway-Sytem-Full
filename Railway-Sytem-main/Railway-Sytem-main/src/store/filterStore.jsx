import { create } from "zustand";
const useFilterStore = create((set) => ({
  data: [], // train trip
  setData: (data) => set({ data }), // set data train trip to store

  bookingInfor: {},
  setBookingInfor: (bookingInfor) => set({ bookingInfor }),

  verifyTicket: {},
  setVerifyTicket: (verifyTicket) => set({ verifyTicket }),

  returnTicket: {},
  setReturnTicket: (returnTicket) => set({ returnTicket }),
}));
export default useFilterStore;

export const selectListTrain = (state) => state.data;
export const listBookingInfor = (state) => state.bookingInfor;
export const listVerifyTicket = (state) => state.verifyTicket;
export const listReturnTicket = (state) => state.returnTicket;
