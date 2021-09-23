import React from 'react'
import { Flex, Box, Avatar, Paragraph } from 'theme-ui'
import authors from './authors'

export const Author = ({ authorKey, author: passedAuthor }) => {
  let author;

  if (authorKey) {
    author = authors[authorKey];
  }

  if (passedAuthor) {
    author = passedAuthor;
  }

  if (!author) return null

  return (
    <>
    <hr />
    <Flex pt={3} pb={3}>
      {
        author.avatar
          ? <Box mr={3} sx={{ flex: '1 1 48px' }}>
            <Avatar src={author.avatar} alt={author.name} />
          </Box>
          : null
      }
      <Box sx={{width: 'calc(100% - 48px)'}}>
        <Paragraph sx={{ fontStyle: 'italic' }}>{author.description}</Paragraph>
      </Box>
    </Flex>
    </>
  )
}