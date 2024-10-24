'use client'
import React, { createContext, useReducer, useContext, ReactNode } from 'react'

interface FundState {
  selectedFund: string
  donateAmount: number
  emergencyAmount: number
  fidyaAmount: number
  humanitariansAmount: number
  kaffarahAmount: number
  selectedSection: string
}

type FundAction =
  | { type: 'SELECT_FUND'; payload: string }
  | { type: 'SET_DONATE_AMOUNT'; payload: any }
  | { type: 'SET_EMERGENCY_AMOUNT'; payload: any}
  | { type: 'SET_FIDYA_AMOUNT'; payload: any}
  | { type: 'SET_HUMANITARIANS_AMOUNT'; payload: any}
  | { type: 'SET_KAFFARAH_AMOUNT'; payload: any}
  | { type: 'SET_SELECTED_SECTION'; payload: string}

const initialState: FundState = {
  selectedFund: '',
  donateAmount: 100,
  emergencyAmount: 180,
  fidyaAmount: 10,
  humanitariansAmount: 150,
  kaffarahAmount: 600,
  selectedSection: 'USD'
}

const fundReducer = (state: FundState, action: FundAction): FundState => {
  switch (action.type) {
    case 'SELECT_FUND':
      return {
        ...state,
        selectedFund: action.payload,
      }
    case 'SET_DONATE_AMOUNT':
      return {
        ...state,
        donateAmount: action.payload,
      }
    case 'SET_EMERGENCY_AMOUNT':
      return {
        ...state,
        emergencyAmount: action.payload,
      }
    case 'SET_FIDYA_AMOUNT':
      return {
        ...state,
        fidyaAmount: action.payload,
      }
    case 'SET_HUMANITARIANS_AMOUNT':
      return {
        ...state,
        humanitariansAmount: action.payload,
      }
    case 'SET_SELECTED_SECTION':
      return {
        ...state,
        selectedSection: action.payload,
      }
    default:
      return state
  }
}

interface FundContextType {
  state: FundState
  dispatch: React.Dispatch<FundAction>
}

const FundContext = createContext<FundContextType | undefined>(undefined)

export const FundProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(fundReducer, initialState)

  return (
    <FundContext.Provider value={{ state, dispatch }}>
      {children}
    </FundContext.Provider>
  )
}

export const useFund = () => {
  const context = useContext(FundContext)
  if (!context) {
    throw new Error('useFund must be used within a FundProvider')
  }
  return context
}
