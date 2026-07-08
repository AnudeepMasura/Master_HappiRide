// ==========================================================
// Wallet Types
// ==========================================================

export interface WalletStat {
  id: number;
  title: string;
  value: string;
}

export interface WithdrawalRequest {
  id: number;
  requestId: string;
  requestDate: string;
  username: string;
  userType: string;
  withdrawalAmount: string;
  availableBalance: string;
  status: "Pending" | "Approved" | "Rejected";
}

export interface WalletResponse {
  stats: WalletStat[];
  withdrawals: WithdrawalRequest[];
}