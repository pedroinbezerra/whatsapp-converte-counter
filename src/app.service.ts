import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clicks } from './schemas/clicks.schema';
import { Changelog } from './schemas/changelog.schema';
import ChangelogDto from './dto/changelog.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Clicks.name) private clicksModel: Model<Clicks>,
    @InjectModel(Changelog.name) private changelogModel: Model<any>
  ) {}

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

  async newChangelog(data: ChangelogDto) {
    const { version, changes } = data;
    this.changelogModel.findOneAndUpdate(
      {version: data.version}, 
      { version, changes }, 
      { upsert: true, new: true }
    ).exec();
  }

  async getLastestChangelog(): Promise<ChangelogDto> {
    return await this.changelogModel.findOne().sort({version: -1}).exec() as ChangelogDto;
  }
}
