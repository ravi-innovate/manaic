
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

  const { data, count, error } = await supabase
    .from("posts")
    .select("*", { count: 'exact' })
    .order("created_at", { ascending: false })
    .range(offset, offset + perPage - 1)

  if (error) {
    console.log('Error fetching paginated posts:', error.message)
    return { blogs: [], totalCount: 0 }
  }

  return {
    blogs: data ?? [],
    totalCount: count ?? 0,
  }
}

export async function fetchSlugs() {
  const { data, error } = await supabase.from('posts').select('slug, updated_at');
  if (!data || error) {
    console.log('error while fetching slugs : ', error.message)
    return [];
  }
  else
    return data.map(p => ({
      loc: `/tech/${p.slug}`,
      lastmod: p.updated_at,
    }));
}

export async function updatePostLike(postId: number) {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('likes')
      .eq('id', postId)
      .single()

    if (error) throw error

    const currentLikes = data.likes || 0

    const { error: updateError } = await supabase
      .from('posts')
      .update({ likes: currentLikes + 1 })
      .eq('id', postId)
      if (updateError) throw updateError
    return {success:true}
  } catch (error) {
    console.error('Error updating likes:', error)
    return { success: false }
  }
}