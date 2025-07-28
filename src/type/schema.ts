
export type Blog = {
  id: number
  title: string
  slug: string
  created_at: string
  faq: string
  likes: number
  excerpt?: string
  cover_image?: string
}

export type LikeButtonProps = {
  postId: number
  initialLikes: number
}