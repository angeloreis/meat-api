import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant.module';
import { ReviewModule } from './review.module';
import { UserModule } from './user.module';

@Module({
  imports: [RestaurantModule, ReviewModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
