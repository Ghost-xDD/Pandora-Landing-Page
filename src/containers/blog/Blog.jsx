import React from 'react';
import { Article } from '../../components';
import { world, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className="pandora__blog section__padding" id="blog">
      <div className="pandora__blog-heading">
        <h1 className="gradient__text">From The Blog</h1>
      </div>
      <div className="pandora__blog-container">
        <div className="pandora__blog-container_groupA">
          <Article
            imgUrl={world}
            date="Sept 26, 2021"
            title="Pandora v1.0: Sharding and Economic Security"
            snippet="This post is about the technology powering Polkadot. Polkadot is a sharded blockchain with heterogeneous shards. What sharding means in this context is splitting up the work that happens onto multiple sub-blockchains, known as parachains. What heterogeneous means in this context is that each blockchain ...."
          />
        </div>
        <div className="pandora__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Oct 3, 2021"
            title="Getting Started with NFTs on Pandora"
          />
          <Article
            imgUrl={blog03}
            date="Nov 18, 2021"
            title="Build Pandora Compatible Dapps with Rust"
          />
          <Article
            imgUrl={blog04}
            date="Dec 27, 2021"
            title="Consensys partners with Pandora for Enterprise Blockchain Project"
          />
          <Article
            imgUrl={blog05}
            date="March 9, 2022"
            title="Introducing Pandora Studios for the Metaverse"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;