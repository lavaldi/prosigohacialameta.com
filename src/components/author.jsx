import * as React from "react";
import { Flex, Box, Avatar, Paragraph, Divider, Text } from "theme-ui";
import authors from "./authors";

export const Author = ({ authorKey, author: passedAuthor }) => {
  let author;

  if (authorKey) {
    author = authors[authorKey];
  }

  if (passedAuthor) {
    author = passedAuthor;
  }

  if (!author) return null;

  return (
    <>
      <Divider />
      <Flex pt={3} pb={3}>
        {author.avatar ? (
          <Box mr={3} sx={{ flex: "1 1 100" }}>
            <Avatar src={author.avatar} alt={author.name} />
          </Box>
        ) : null}
        <Box sx={{ width: `calc(100% - ${author.avatar ? 100 : 0}px)` }}>
          <Paragraph>
            <Text
              sx={{
                fontSize: 3,
                fontWeight: "bold",
              }}
            >
              Escrito por {author.name}
            </Text>
          </Paragraph>
          <Paragraph sx={{ fontStyle: "italic", fontSize: [1, 1, 2] }}>
            {author.description}
          </Paragraph>
        </Box>
      </Flex>
    </>
  );
};
