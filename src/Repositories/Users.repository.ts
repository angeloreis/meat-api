import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
    ){}

    findAll(): Promise<User[]> {
        return this.userRepo.find()
    }

    findOne(id: number): Promise<User> {
        return this.userRepo.findOne({
            where: {
                id
            }
        })
    }

    async remove(id: number): Promise<void> {
        await this.userRepo.delete(id)
    }
}