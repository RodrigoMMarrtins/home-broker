import { PrismaService } from '../prisma/prisma/prisma.service';
export declare class AssetsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        symbol: string;
        price: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {})[]>;
    create(data: {
        id: string;
        symbol: string;
        price: number;
    }): import(".prisma/client").Prisma.Prisma__AssetClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        symbol: string;
        price: number;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
