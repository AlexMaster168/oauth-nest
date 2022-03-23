import { Module } from "@nestjs/common"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy'
import { ConfigModule } from "@nestjs/config"
import { FacebookStrategy } from "./facebook.strategy"

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env'})],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, FacebookStrategy],
})
export class AppModule {}