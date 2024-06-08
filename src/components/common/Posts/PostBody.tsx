const PostBody = ({ post }) => {
  const { content } = post.fields

  return (
    <div className='mx-auto prose'>
        {content}
    </div>
  )
}

export default PostBody