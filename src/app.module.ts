import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Clicks, ClicksSchema } from './schemas/clicks.schema';
import { DomainValidationMiddleware } from './middleware/domain-validation.middleware';
import { Changelog, ChangelogSchema } from './schemas/changelog.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
  }),
    MongooseModule.forRoot(process.env.DATABASEURL),
    MongooseModule.forFeature([
      { name: Clicks.name, schema: ClicksSchema }, 
      { name: Changelog.name, schema: ChangelogSchema }
    ])
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
