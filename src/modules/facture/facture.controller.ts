import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { FactureEntity } from 'src/commun/entities/facture/facture';
import { FactureService } from './facture.service';
import { CreateFactureDTO } from 'src/commun/dto/facture/facture-create.dto';

@Controller('facture')
export class FactureController {
    constructor(private readonly factureService: FactureService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createFacture(@Body() dto: CreateFactureDTO): Promise<FactureEntity> {
    return this.factureService.createFacture(dto);
  }
}

