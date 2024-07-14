/* eslint-disable max-lines */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "post_1234",
  tags: [],
  media: [],
  feeling: {},
  mentions: [],
  location: {},
  comments: [],
  hashtags: [],
  description: "",
  subscriptions: [],
  post_location: {},
  post_type: "global",
  user: {
    id: "user_1234",
    lastname: "Doe",
    firstname: "John",
    username: "john_doe",
  },
  engagement: {
    views: 0,
    shares: 0,
    reactions: [],
    reacted: false,
    reaction_count: 0,
  },
  status: {
    is_draft: false,
    is_tagged: false,
    is_hidden: false,
    is_pinned: false,
    is_edited: false,
    is_deleted: false,
    is_reported: false,
    is_archived: false,
    is_published: false,
    is_commented: false,
    is_mentioned: false,
  },
};

export const createPostSlice = createSlice({
  initialState,
  name: "createPost",
  reducers: {
    reset() {
      return initialState;
    },
    removeFeeling(state) {
      state.feeling = {};
    },
    draft(state) {
      state.status.is_draft = true;
    },
    removeLocation(state) {
      state.location = {};
    },
    publish(state) {
      state.status.is_published = true;
    },
    addMedia(state, action) {
      state.media.push(action.payload);
    },
    setFeeling(state, action) {
      state.feeling = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setPostType(state, action) {
      state.post_type = action.payload;
    },
    addMention(state, action) {
      state.mentions.push(action.payload);
    },
    addHashtag(state, action) {
      state.hashtags.push(action.payload);
    },
    setVisibility(state, action) {
      state.visibility = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setTags(state, action) {
      state.tags = [...action.payload, ...state.tags];
    },
    submit(state) {
      state.status.is_draft = false;
      state.status.is_published = true;
    },
    schedule(state, action) {
      state.status.scheduledDate = action.payload;
      state.status.is_scheduled = true;
    },
    removeTag(state, action) {
      state.tags = state.tags.filter((tag) => {
        return tag !== action.payload;
      });
    },
    removeMedia(state, action) {
      state.media = state.media.filter((media) => {
        return media !== action.payload;
      });
    },
    removeMention(state, action) {
      state.mentions = state.mentions.filter((mention) => {
        return mention !== action.payload;
      });
    },
    removeHashtag(state, action) {
      state.hashtags = state.hashtags.filter((hashtag) => {
        return hashtag !== action.payload;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  draft,
  reset,
  submit,
  setTags,
  publish,
  addMedia,
  schedule,
  removeTag,
  setFeeling,
  addMention,
  addHashtag,
  removeMedia,
  setLocation,
  setPostType,
  removeFeeling,
  removeMention,
  removeHashtag,
  setVisibility,
  removeLocation,
  setDescription,
} = createPostSlice.actions;

// Post selector
export const selectPostDraft = (state) => {
  return state.createPost;
};

export default createPostSlice.reducer;
