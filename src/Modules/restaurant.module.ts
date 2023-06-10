import { Module } from '@nestjs/common';
import { RestaurantService } from '../Services/restaurant.service';
import { RestaurantController } from '../Controllers/restaurant.controller';

@Module({
  providers: [RestaurantService],
  controllers: [RestaurantController]
})
export class RestaurantModule {}
