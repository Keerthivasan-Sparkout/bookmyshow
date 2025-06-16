import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheaterModule } from './Theater/Theater.module';
import { Theater } from './Theater/Theater.Entity';
import { Movies } from './Movies/Movies.Entity';
import { MoviesModule } from './Movies/Movies.Module';
import { Showes } from './Show/Shows.Entity';
import { ShowModule } from './Show/Showes.Module';
import { AuthModule } from './Auth/Auth.Module';
import { Theatervendors } from './Theater/TheaterOwners.Entity';

@Module({
  imports: [TheaterModule,
    MoviesModule,
    ShowModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'bookmyshow16',
      entities: [Theater,Movies,Showes,Theatervendors],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Theater,Movies,Showes])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
