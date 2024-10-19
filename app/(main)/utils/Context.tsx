'use client'
import React, { createContext, useReducer, useContext, ReactNode } from 'react'

interface FundState {
  selectedFund: string
}

type FundAction = { type: 'SELECT_FUND'; payload: string }

const initialState: FundState = {
  selectedFund: '',
}

const fundReducer = (state: FundState, action: FundAction): FundState => {
  switch (action.type) {
    case 'SELECT_FUND':
      return {
        ...state,
        selectedFund: action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

interface FundContextType {
  state: FundState;
  dispatch: React.Dispatch<FundAction>;
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