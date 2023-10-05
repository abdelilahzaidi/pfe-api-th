import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactureEntity } from 'src/commun/entities/facture/facture';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';


@Module({
    imports:[
        TypeOrmModule.forFeature([FactureEntity]),
        
      ],
      providers: [FactureService],
      controllers: [FactureController],
      exports:[]
})
export class FactureModule {}
