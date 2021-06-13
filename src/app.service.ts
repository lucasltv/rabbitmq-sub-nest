import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    exchange: 'amq.fanout',
    routingKey: 'subscribe-route',
    queue: 'subscribe-queue',
  })
  public async pubSubHandler(msg: any, amqpMsg: any) {
    // const { correlationId } = amqpMsg.properties;
    console.log(`Received message: ${JSON.stringify(msg)} at ${new Date()}`);
  }
}
