import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFactureDTO } from 'src/commun/dto/facture/facture-create.dto';
import { FactureEntity } from 'src/commun/entities/facture/facture';
import { Repository } from 'typeorm';

@Injectable()
export class FactureService {
    constructor(
        @InjectRepository(FactureEntity)
        private readonly factureRepository: Repository<FactureEntity>,
      ) {}
    
      async createFacture(dto : CreateFactureDTO): Promise<FactureEntity> {
        const facture = this.factureRepository.create(dto);
        return this.factureRepository.save(facture);
      }
    
      async getFactures(): Promise<FactureEntity[]> {
        return this.factureRepository.find();
      }
    
      async getFactureById(id: number): Promise<FactureEntity> {
        const facture = await this.factureRepository.findOne({where:{id}});
        if (!facture) {
          throw new NotFoundException('Facture introuvable');
        }
        return facture;
      }
    
      async updateFacture(id: number, factureData: Partial<FactureEntity>): Promise<FactureEntity> {
        await this.getFactureById(id);
        await this.factureRepository.update(id, factureData);
        return this.getFactureById(id);
      }
    
      async deleteFacture(id: number): Promise<void> {
        await this.getFactureById(id);
        await this.factureRepository.delete(id);
      }
}
