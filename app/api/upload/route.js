import { createServerSupabaseClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const formData = await request.formData()
  const file = formData.get('file')
  
  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 })

  const supabase = createServerSupabaseClient()
  const fileName = `${Date.now()}-${file.name}`

  const { data, error } = await supabase.storage
    .from('blog-images')
    .upload(fileName, file)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const { data: publicUrl } = supabase.storage
    .from('blog-images')
    .getPublicUrl(data.path)

  return NextResponse.json({ url: publicUrl.publicUrl })
}
