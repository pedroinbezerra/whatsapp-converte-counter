import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clicks } from './clicks.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Clicks.name) private clicksModel: Model<Clicks>) {}

  health(): string {
    return 'OK';
  }

  async addClick() {
    this.clicksModel.findOneAndUpdate({}, { $inc: { total: 1 } }, { upsert: true, new: true }).exec();
  }

  async getTotal() {
    const clicks = await this.clicksModel.findOne().exec();
    return clicks.total;
  }
}
