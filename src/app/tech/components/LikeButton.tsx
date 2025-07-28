'use client'

import { useEffect, useState } from 'react'
import { updatePostLike } from '@/app/api/apiMethod'
import { LikeButtonProps } from '@/type/schema'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'

export default function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}')
    if (likedPosts[postId]) {
      setLiked(true)
    }
  }, [postId])

  const handleLike = async () => {
    if (liked) return

    const res = await updatePostLike(postId)
    if (res?.success) {
      setLikes(prev => prev + 1)
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}')
      likedPosts[postId] = true
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts))
      setLiked(true)
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={liked}
      className={`group flex items-center gap-2 px-4 py-1.5 rounded-full font-medium border transition-all duration-200 shadow-sm main-text border-[var(--main-text)]
        ${liked
          ? 'bg-muted text-secondary-text border-muted button-disabled'
          : 'bg-transparent hover:bg-purple-100/20 hover:shadow-md'
        }`}
    >
      {liked
        ? <FaThumbsUp
          className={`text-xl transition-transform duration-200 group-hover:scale-110`}
        />
        : <FaRegThumbsUp
          className={`text-xl transition-transform duration-200 group-hover:scale-110`}
        />}
      <span className="text-xs">
        <span className="font-semibold">{likes}</span>
      </span>
    </button>
  )
}
