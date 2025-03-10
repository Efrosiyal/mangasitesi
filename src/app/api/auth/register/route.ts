import { NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { email, password, username } = await request.json()

    // Validasyon
    if (!email || !password || !username) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur' },
        { status: 400 }
      )
    }

    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçersiz email formatı' },
        { status: 400 }
      )
    }

    // Kullanıcı kontrolü
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Bu email veya kullanıcı adı zaten kullanımda' },
        { status: 400 }
      )
    }

    // Şifre hash'leme
    const hashedPassword = await hash(password, 12)

    // Kullanıcı oluşturma
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword
      }
    })

    // Hassas bilgileri çıkar
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    console.error('Kayıt hatası:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
} 