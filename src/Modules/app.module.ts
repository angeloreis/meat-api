import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { RestaurantModule } from './restaurant.module';
import { ReviewModule } from './review.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    RestaurantModule,
    ReviewModule,
    UserModule,
    DatabaseModule,
  ]
})
export class AppModule {}
