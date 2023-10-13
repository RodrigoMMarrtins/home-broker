import { PrismaService } from 'src/prisma/prisma/prisma.service';
export declare class WalletsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {})[]>;
    create(input: {
        id: string;
    }): import(".prisma/client").Prisma.Prisma__WalletClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
