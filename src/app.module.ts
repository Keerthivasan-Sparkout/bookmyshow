import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './Movies/movies.module';
import { TheaterModule } from './Theater/thaeter.Module';

@Module({
  imports: [MoviesModule,TheaterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
