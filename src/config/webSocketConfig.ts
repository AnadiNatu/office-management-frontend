import { API_BASE_URL } from './apiConfig';

export const WS_CONFIG = {
  // Goes through the API Gateway. Adjust to your gateway's WS route.
  url: import.meta.env.VITE_WS_URL || `${API_BASE_URL}/ws`,
  reconnectDelayMs: 5000,
  heartbeatIncomingMs: 10000,
  heartbeatOutgoingMs: 10000,
  // TODO: confirm with backend
  subscriptions: {
    messages: '/user/queue/messages',
    messageStatus: '/user/queue/message-status',
    notifications: '/user/queue/notifications',
  },
} as const;