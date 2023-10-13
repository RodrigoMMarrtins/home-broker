import { WalletAssetsService } from './wallet-assets.service';
export declare class WalletAssetsController {
    private walletsAssetsService;
    constructor(walletsAssetsService: WalletAssetsService);
    all(wallet_id: string): import(".prisma/client").Prisma.PrismaPromise<({
        Asset: {
            id: string;
            symbol: string;
            price: number;
        };
    } & import("@prisma/client/runtime").GetResult<{
        id: string;
        wallet_id: string;
        asset_id: string;
        shares: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {})[]>;
    create(wallet_id: string, body: {
        asset_id: string;
        shares: number;
    }): import(".prisma/client").Prisma.Prisma__WalletAssetClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        wallet_id: string;
        asset_id: string;
        shares: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
