import { WalletsService } from './wallets.service';
export declare class WalletsController {
    private readonly walletsService;
    constructor(walletsService: WalletsService);
    all(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {})[]>;
    create(body: {
        id: string;
    }): import(".prisma/client").Prisma.Prisma__WalletClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
