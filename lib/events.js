/**
 * Cross-tab and real-time lead submission notification dispatcher
 */
export function emitLeadSubmittedEvent() {
  if (typeof window === 'undefined') return
  try {
    const bc = new BroadcastChannel('bootsolo_leads_channel')
    bc.postMessage({ type: 'LEAD_SUBMITTED', timestamp: Date.now() })
    bc.close()
  } catch (e) {
    // BroadcastChannel unsupported or restricted
  }

  try {
    localStorage.setItem('bootsolo_last_lead_event', Date.now().toString())
  } catch (e) {
    // LocalStorage unavailable
  }
}
