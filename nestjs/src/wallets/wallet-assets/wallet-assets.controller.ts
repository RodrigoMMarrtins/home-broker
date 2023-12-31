import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WalletAssetsService } from './wallet-assets.service';

@Controller('wallets/:wallet_id/assets')
export class WalletAssetsController {
  constructor(private walletsAssetsService: WalletAssetsService) {}

  @Get()
  all(@Param('wallet_id') wallet_id: string) {
    console.log('wallet_id', wallet_id);
    return this.walletsAssetsService.all({ wallet_id });
  }

  @Post()
  create(
    @Param('wallet_id') wallet_id: string,
    @Body() body: { asset_id: string; shares: number },
  ) {
    return this.walletsAssetsService.create({
      wallet_id,
      ...body,
    });
  }
}
