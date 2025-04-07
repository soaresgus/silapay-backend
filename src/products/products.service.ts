import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    return this.prisma.product.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findById(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Produto com id ${id} não encontrado`);
    }

    return product;
  }

  async update(id: number, data: UpdateProductDto) {
    const existing = await this.prisma.product.findUnique({ where: { id } });

    if (!existing) {
      throw new NotFoundException(`Produto com id ${id} não encontrado`);
    }

    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async deleteById(id: number) {
    const existing = await this.prisma.product.findUnique({ where: { id } });

    if (!existing) {
      throw new NotFoundException(`Produto com id ${id} não encontrado`);
    }

    return this.prisma.product.delete({ where: { id } });
  }
}
