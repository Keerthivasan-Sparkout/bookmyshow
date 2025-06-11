import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheaterModule } from './Theater/Theater.module';
import { Theater } from './Theater/Theater.Entity';
import { Movies } from './Movies/Movies.Entity';
import { MoviesModule } from './Movies/Movies.Module';
import { MovieTimingAndScreen } from './Theater/Theater.Timing.Entity';

@Module({
  imports: [TheaterModule,
    MoviesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'bookmyshow',
      entities: [Theater,Movies,MovieTimingAndScreen],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Theater,Movies])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
