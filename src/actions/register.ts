import { prisma } from '@/lib/prisma'
import { createAccessToken } from '@/utils/create-access-token'
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { ZSAError, createServerAction } from 'zsa'

export const login = createServerAction()
  .input(
    z.object({
      email: z.string().trim().email(),
      password: z.string().trim().min(8),
    }),
  )
  .handler(async ({ input: { email, password } }) => {
    const userWithSameEmail = await prisma.user.findUnique({
      where: { email },
    })

    if (userWithSameEmail) {
      throw new ZSAError('CONFLICT', 'This email is already registered')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    })

    const accessToken = await createAccessToken(user.id)

    cookies().set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 90, // 90 days
    })

    redirect('/')
  })
