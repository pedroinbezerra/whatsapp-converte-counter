import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClicksDocument = HydratedDocument<Clicks>;

@Schema()
export class Clicks {
  @Prop()
  total: number;
}

export const ClicksSchema = SchemaFactory.createForClass(Clicks);