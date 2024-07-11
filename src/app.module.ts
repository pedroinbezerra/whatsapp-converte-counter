import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Clicks, ClicksSchema } from './clicks.schema';
import { DomainValidationMiddleware } from './middleware/domain-validation.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
  }),
    MongooseModule.forRoot(process.env.DATABASEURL),
    MongooseModule.forFeature([{ name: Clicks.name, schema: ClicksSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DomainValidationMiddleware)
      .forRoutes('*');
  }
}
