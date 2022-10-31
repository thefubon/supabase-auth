import { serverSupabaseUser } from '#supabase/server'

const data = [
  { id: 0, email: 'yagel.dj@gmail.com', content: 'My note 1' },
  { id: 1, email: 'yagel.dj@gmail.com', content: 'Secret stuff' },
  { id: 2, email: 'yagel.dj@gmail.com', content: 'Do not share with not matt' },
  { id: 3, email: 'yagel.dj@gmail.com', content: 'Account #2' },
  { id: 4, email: 'yagel.dj@gmail.com', content: 'mores tuff' },
]

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  return data.filter((note) => note.email === user.email)
})
