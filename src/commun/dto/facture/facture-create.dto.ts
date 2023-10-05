import { IsDate, IsBoolean, IsNumber, IsNotEmpty } from "class-validator";

export class CreateFactureDTO {
    @IsNotEmpty()
    dateEnvoie: Date;
  
    @IsBoolean()
    etatDePaiement: boolean;
  
    @IsNumber()
    montant: number;
  }