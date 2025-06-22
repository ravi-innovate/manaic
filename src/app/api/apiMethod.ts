
import { supabase } from '@/lib/supabase/client'

/**
 * Fetch a all posts
 * @param null
 */

export async function getAllPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, cover_image, tags, created_at')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

/**
 * Fetch a single post by slug
 * @param slug - unique identifier for the blog post
 */
export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching post by slug:', error.message)
    return null
  }

  return data
}

/**
 * Fetch a all posts for infinity scroll pagination
 * @param page - current page, @param perPage - count of post on one time load
 */
export async function getBlogsPaginated(page: number = 1, perPage: number = 6) {
  const offset = (page - 1) * perPage

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })
    .range(offset, offset + perPage - 1)

  return data ?? []
}
