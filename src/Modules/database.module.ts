import { Module } from "@nestjs/common";
import { DatabaseProviders } from "src/Commons/database";

@Module({
    providers: [...DatabaseProviders],
    exports: [...DatabaseProviders]
})
export class DatabaseModule {}