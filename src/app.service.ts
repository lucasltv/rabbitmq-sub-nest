import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { RBMQ_EXCHANGES, RBMQ_WORKER } from './enums';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  @RabbitSubscribe({
    exchange: RBMQ_EXCHANGES.SERVICE_1,
    routingKey: 'w1.*',
    queue: RBMQ_WORKER.WORKER_1,
    queueOptions: {
      durable: true,
    },
  })
  pubSubHandler(msg: any) {
    this.logger.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
