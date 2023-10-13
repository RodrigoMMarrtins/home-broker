import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { InitTransactionDto, InputExecuteTransaction } from './order.dto';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  initTransaction(input: InitTransactionDto) {
    return this.prismaService.order.create({
      data: {
        asset_id: input.asset_id,
        wallet_id: input.wallet_id,
        shares: input.shares,
        price: input.price,
        type: input.type,
        status: OrderStatus.PENDING,
        partial: input.shares,
      },
    });
  }

  async executeTransaction(input: InputExecuteTransaction) {
    const order = await this.prismaService.order.findUniqueOrThrow({
      where: { id: input.order_id },
    });
    await this.prismaService.order.update({
      where: { id: input.order_id },
      data: {
        partial: order.partial - input.nogociated_shares,
        status: input.status,
        Transactions: {
          create: {
            broker_transaction_id: input.broker_transaction_id,
            related_investor_id: input.related_investor_id,
            shares: input.nogociated_shares,
            price: input.price,
          },
        },
      },
    });
    if (input.status === OrderStatus.CLOSED) {
      await this.prismaService.asset.update({
        where: { id: order.asset_id },
        data: {
          price: input.price,
        },
      });
      const walletAsset =
        await this.prismaService.walletAsset.findUniqueOrThrow({
          where: {
            wallet_id_asset_id: {
              asset_id: order.asset_id,
              wallet_id: order.wallet_id,
            },
          },
        });
      if (walletAsset) {
        await this.prismaService.walletAsset.update({
          where: {
            wallet_id_asset_id: {
              asset_id: order.asset_id,
              wallet_id: order.wallet_id,
            },
          },
          data: {
            shares: input.nogociated_shares,
          },
        });
      } else {
        await this.prismaService.walletAsset.create({
          data: {
            asset_id: order.asset_id,
            wallet_id: order.wallet_id,
            shares: input.nogociated_shares,
          },
        });
      }
    }
  }
}
