import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { InitTransactionDto } from './order.dto';
import { OrderStatus } from '@prisma/client';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    initTransaction(input: InitTransactionDto): import(".prisma/client").Prisma.Prisma__OrderClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        wallet_id: string;
        asset_id: string;
        shares: number;
        price: number;
        type: import(".prisma/client").OrderType;
        status: OrderStatus;
        partial: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    executeTransaction(order_id: number): void;
}
