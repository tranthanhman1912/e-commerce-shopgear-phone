import React from "react";
import BlogList from "../components/BlogList";
import RecentPost from "../components/RecentPost";
//api
import blog, { recentPosts, gallery,tags } from "../api/blog";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="blog__left">
          {blog.map((item, index) => (
            <BlogList key={index} item={item} />
          ))}
        </div>
        <div className="blog__right">
          <div className="blog__right__item">
            <div className="blog__recent__post">
              <div className="blog__right__item__name blog__recent__name">
                Recent Posts
              </div>
              {recentPosts.map((item) => (
                <RecentPost item={item} key={item.id} />
              ))}
            </div>
          </div>

          <div className="blog__right__item">
            <div className="blog__gallery">
              <div className="blog__right__item__name blog__gallery__name">
                Gallery
              </div>
              <div className="blog__right__item__img">
                {gallery.map((item, index) => (
                  <img src={item.img} alt={item.img} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="blog__right__item">
            <div className="blog__tags">
              <div className="blog__right__item__name blog__tags__name">
                Tags
              </div>
              <div className="blog__tags__item">
                {tags.map((item, index) => (
                  <span key={index}>{item.display}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
