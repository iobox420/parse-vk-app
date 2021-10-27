import mongoose from "mongoose";
const { Schema, model } = mongoose;

const vkModel = model(
  "vk",
  new Schema({
    id: { type: String },
    from_id: { type: Number },
    owner_id: { type: Number },
    date: { type: Number },
    marked_as_ads: { type: Number },
    post_type: { type: String },
    text: { type: String },
    signer_id: { type: Number },
    attachments: [
      {
        type: { type: String },
        photo: [
          {
            album_id: { type: Number },
            date: { type: Number },
            id: { type: Number },
            owner_id: { type: Number },
            has_tags: { type: Boolean },
            access_key: { type: String },
            sizes: [
              {
                height: { type: Number },
                url: { type: String },
                type: { type: String },
                width: { type: Number },
              },
            ],
            text: { type: String },
            user_id: { type: Number },
          },
        ],
      },
    ],
    post_source: {
      type: { type: String },
    },
    comments: {
      can_post: { type: Number },
      count: { type: Number },
      groups_can_post: { type: Boolean },
    },
    likes: {
      can_like: { type: Number },
      count: { type: Number },
      user_likes: { type: Number },
      can_publish: { type: Number },
    },
    reposts: {
      count: { type: Number },
      user_reposted: { type: Number },
    },
    views: {
      count: { type: Number },
    },
    is_favorite: { type: Boolean },
    donut: {
      is_donut: { type: Boolean },
    },
    short_text_rate: { type: Number },
    hash: { type: String },
  })
);

export default vkModel;
