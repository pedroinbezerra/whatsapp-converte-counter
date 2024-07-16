import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";

export default class ChangelogDto {
    @IsString()
    @IsNotEmpty()
    version: string;

    @IsArray()
    @Type(() => String)
    @ArrayNotEmpty()
    changes: string[];
}