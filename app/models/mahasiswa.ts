"use server";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

// BUat variable "Prisma"
// const prisma = new PrismaClient();
const prisma = new PrismaClient();

export async function getData() {
  // membuat variabel mahasiswa
  const mahasiswa = await prisma.tb_mahasiswa.findMany({
    where: {
      status: "Y",
      // prodi :{
      //   contains: 'Sastra'
      // }
    },
  });

  return mahasiswa;
}

// Buat fungsi arrow function
export const deleteUpdate = async (npmParameter: string) => {
  await prisma.tb_mahasiswa.updateMany({
    where: {
      npm: npmParameter,
    },
    data: {
      status: "T",
    },
  });
};

export const deleteMahasiswa = async (npmParameter: string) => {
  await prisma.tb_mahasiswa.deleteMany({
    where: {
      npm: npmParameter,
    },
  });
};

// Buat Fungsi untuk cek DATA mAHASISWA berdasarkan NPM
export const cekData = async (npmParameter: string) => {
  const cekricek = await prisma.tb_mahasiswa.findMany({
    select:{
      id:true,
    },
    where: {
      npm: npmParameter,
      // prodi :{
      //   contains: 'Sastra'
      // }
    },
  });

  return cekricek;
};

// Buat Fungsi untuk Simpan Data
export const createMhs = async (
  // Parameter Formal
  npmParameter: string,
  namaParameter: string,
  prodiParameter: string,
) => {
  await prisma.tb_mahasiswa.create({
    data: {
      npm: npmParameter,
      nama: namaParameter,
      prodi: prodiParameter,
      status: 'Y',
    },
  });
};


// Buat Fungsi untuk detail DATA mAHASISWA berdasarkan NPM
export const detailData = async (npmParameter: string) => {
  const detail = await prisma.tb_mahasiswa.findMany({
    where: {
      npm: npmParameter,
      // prodi :{
      //   contains: 'Sastra'
      // }
    },
  });

  return detail;
};