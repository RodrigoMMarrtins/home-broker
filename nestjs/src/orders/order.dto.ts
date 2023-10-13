import { OrderType } from '@prisma/client';

export class InitTransactionDto {
  asset_id: string;
  wallet_id: string;
  shares: number;
  price: number;
  type: OrderType;
}

export class InputExecuteTransaction {
  order_id: string;
  status: 'OPEN' | 'CLOSED';
  price: number;
  related_investor_id: string;
  broker_transaction_id: string;
  nogociated_shares: number;
}
