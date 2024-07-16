import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChangelogDocument = HydratedDocument<Changelog>;

@Schema()
export class Changelog {
  @Prop()
  version: string;

  @Prop()
  changes: string[];
}

export const ChangelogSchema = SchemaFactory.createForClass(Changelog);