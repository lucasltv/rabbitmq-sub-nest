import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { RBMQ_EXCHANGES } from './enums';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RabbitMQModule.forRootAsync({
      useFactory: () => ({
        exchanges: [
          {
            name: RBMQ_EXCHANGES.SERVICE_1,
            type: 'topic',
          },
        ],
        uri: process.env.AMQP_URL!,
      }),
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
