import { Link as RouterLink } from "react-router-dom";
// material
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import Iconify from "../components/Iconify";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../sections/@dashboard/blog";
//
// import POSTS from "../_mocks_/blog";
import { faker } from "@faker-js/faker";
// utils
import { mockImgCover } from "../utils/mockImages";
////////////////////////
import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import db from "src/my-articles/src/firebaseConfig.js";
import DeleteArticle from "src/my-articles/src//DeleteArticle";
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];
// ----------------------------------------------------------------------

// var POSTS = [
//   "Whiteboard Templates By Industry Leaders",
//   "Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!",
//   "Designify Agency Landing Page Design",
//   // "✨What is Done is Done ✨",
//   // "Fresh Prince",
//   // "Six Socks Studio",
//   // "vincenzo de cotiis’ crossing over showcases a research on contamination",
//   // "Simple, Great Looking Animations in Your Project | Video Tutorial",
//   // "40 Free Serif Fonts for Digital Designers",
//   // "Examining the Evolution of the Typical Web Design Client",
//   // "Katie Griffin loves making that homey art",
//   // "The American Dream retold through mid-century railroad graphics",
//   // "Illustration System Design",
//   // "CarZio-Delivery Driver App SignIn/SignUp",
//   // "How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna",
//   // "Tylko Organise effortlessly -3D & Motion Design",
//   // "RAYO ?? A expanded visual arts festival identity",
//   // "Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover",
//   // "Inside the Mind of Samuel Day",
//   // "Portfolio Review: Is This Portfolio Too Creative?",
//   // "Akkers van Margraten",
//   // "Gradient Ticket icon",
//   // "Here’s a Dyson motorcycle concept that doesn’t ‘suck’!",
//   // "How to Animate a SVG with border-image",
// ];

export default function Blog() {
  const [posts, setArticles] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // setArticles(articles.map(({ title, createdAt }) => title));
      setArticles(
        articles.map(
          ({ id, title, description, imageUrl, createdAt }, index) => ({
            id: id,
            cover: imageUrl,
            title: title,
            createdAt: createdAt.toDate().toDateString(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.findName(),
              avatarUrl: `../static/mock-images/avatars/avatar_${
                index + 1
              }.jpg`,
            },
          })
        )
      );
    });
  }, []);

  return (
    <Page title="Dashboard: Blog | Minimal-UI">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/new-blog"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Post
          </Button>
        </Stack>
        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* {console.log("Test: ", test)}
          {console.log("Posts: ", posts)} */}
          <BlogPostsSearch posts={posts} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>
        <Grid container spacing={3}>
          {posts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
