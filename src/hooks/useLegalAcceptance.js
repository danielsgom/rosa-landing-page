import { useState, useCallback } from 'react'

const STORAGE_KEY = 'rosa_legal_v1'

export function useLegalAcceptance() {
  const [accepted, setAccepted] = useState(() => {
    return sessionStorage.getItem(STORAGE_KEY) === 'true'
  })

  const accept = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setAccepted(true)
  }, [])

  return { accepted, accept }
}
