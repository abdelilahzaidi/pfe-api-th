import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbonnementEntity } from 'src/commun/entities/abonnement/abonnement';
import { AbonnementService } from './abonnement.service';
import { AbonnementController } from './abonnement.controller';

@Module({
    imports:[
        TypeOrmModule.forFeature([AbonnementEntity]),
        
      ],
      providers: [AbonnementService],
      controllers: [AbonnementController],
      exports:[]
})
export class AbonnementModule {}
