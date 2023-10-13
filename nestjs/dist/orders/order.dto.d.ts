import { OrderType } from '@prisma/client';
export declare class InitTransactionDto {
    asset_id: string;
    wallet_id: string;
    shares: number;
    price: number;
    type: OrderType;
}
export declare class InputExecuteTransaction {
    order_id: string;
    status: 'OPEN' | 'CLOSED';
    price: number;
    related_investor_id: string;
    broker_transaction_id: any;
}
