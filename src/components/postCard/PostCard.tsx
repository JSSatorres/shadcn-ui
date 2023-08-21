'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Post } from '@/app/post/page'
import { Button } from '../ui/button'
import Link from 'next/link'

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  function handleClick () {
    console.log('click')
  }

  return (
    <Card>
      <CardHeader className='flex flex-col'>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.body}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.body}</p>
      </CardContent>
      <div className='flex'>
        <Button className='mx-auto mb-3' onClick={handleClick}>
          <Link href={`/post/${post.id}`}>
            watch
          </Link>
        </Button>
      </div>
    </Card>
  )
}
