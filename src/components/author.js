import React from 'react'
import { Flex, Box, Avatar, Paragraph } from 'theme-ui'
import authors from './authors'

export const Author = ({ authorKey }) => {
  const author = authors[authorKey];

  if (!author) return null

  return (
    <>
    <hr />
    <Flex pt={3}>
      <Box sx={{ flex: '1 1 48px' }}>
        <Avatar src={author.avatar} alt={author.name} />
      </Box>
      <Box ml={3}  sx={{width: 'calc(100% - 48px)'}}>
        <Paragraph sx={{ fontStyle: 'italic' }}>{author.description}</Paragraph>
      </Box>
    </Flex>
    </>
  )
}