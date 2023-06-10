import { Module } from '@nestjs/common';
import { ReviewService } from '../Services/review.service';
import { ReviewController } from '../Controllers/review.controller';

@Module({
  providers: [ReviewService],
  controllers: [ReviewController]
})
export class ReviewModule {}
