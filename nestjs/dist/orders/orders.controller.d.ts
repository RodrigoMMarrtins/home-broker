import { OrdersService } from './orders.service';
import { InitTransactionDto } from './order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    initTransaction(body: InitTransactionDto): import(".prisma/client").Prisma.Prisma__OrderClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        wallet_id: string;
        asset_id: string;
        shares: number;
        price: number;
        type: import(".prisma/client").OrderType;
        status: import(".prisma/client").OrderStatus;
        partial: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
