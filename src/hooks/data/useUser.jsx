/* eslint-disable max-lines */
import { useState } from "react";

const useUser = () => {
  const singleUser = {
    id: "user_1",
    gender: "male",
    firstname: "Harry",
    lastname: "Potter",
    birthday: "1980-07-31",
    username: "harry_potter",
    phone_number: "+1234567890",
    relationship_status: "single",
    email: "harry.potter@example.com",
    website: "https://harrypotter.example.com",
    posts: ["post_1234", "post_5678", "post_91011"],
    cover_photo: "https://example.com/harry_cover.jpg",
    profile_picture: "https://example.com/harry_profile.jpg",
    bio: "Wizard at Hogwarts, Seeker for Gryffindor Quidditch team.",
    interests: ["Quidditch", "Defense Against the Dark Arts", "Wizard Chess"],
    location: {
      lat: 56.8185,
      lon: -5.0035,
      city: "Hogsmeade",
      country: "Scotland",
    },
    groups: [
      {
        id: "group_1234",
        joined_at: "2023-01-01",
        name: "Dumbledore's Army",
      },
    ],
    privacy_settings: {
      message_privacy: "friends",
      profile_visibility: "friends",
      timeline_post_privacy: "friends",
    },
    pages: [
      {
        id: "page_1234",
        liked_at: "2023-01-01",
        name: "Hogwarts School of Witchcraft and Wizardry",
      },
    ],
    work: [
      {
        end_date: null,
        position: "Auror",
        start_date: "1998-08-01",
        company: "Ministry of Magic",
      },
    ],
    subscriptions: [
      {
        post_id: "post_5678",
        created_at: "2023-01-02",
        post_description: "A day at the Forbidden Forest",
      },
    ],
    events: [
      {
        id: "event_1234",
        name: "Yule Ball",
        date: "2023-12-25",
        status: "attending",
        location: "Hogwarts Great Hall",
      },
    ],
    account_settings: {
      language: "en-US",
      sms_notifications: false,
      email_notifications: true,
      time_zone: "America/New_York",
      two_factor_authentication: true,
    },
    blocked_users: [
      {
        id: "user_5",
        firstname: "Tom",
        lastname: "Riddle",
        username: "voldemort",
        profile_picture: "https://example.com/voldemort_profile.jpg",
      },
    ],
    education: [
      {
        degree: "N.E.W.T.s",
        end_date: "1997-06-30",
        start_date: "1991-09-01",
        field_of_study: "Defense Against the Dark Arts",
        school: "Hogwarts School of Witchcraft and Wizardry",
      },
    ],
    friend_requests: [
      {
        id: "user_4",
        firstname: "Draco",
        lastname: "Malfoy",
        username: "draco_malfoy",
        mutual_friends_count: 50,
        profile_picture: "https://example.com/draco_profile.jpg",
      },
    ],
    notifications: [
      {
        id: "notif_1234",
        read: false,
        type: "comment",
        created_at: "2023-01-01",
        content: "Hermione Granger commented on your post",
      },
      {
        id: "notif_1235",
        read: true,
        type: "reaction",
        created_at: "2023-01-01",
        content: "Ron Weasley liked your post",
      },
    ],
    friends: [
      {
        id: "user_2",
        firstname: "Ron",
        lastname: "Weasley",
        username: "ron_weasley",
        mutual_friends_count: 100,
        friendship_status: "friends",
        profile_picture: "https://example.com/ron_profile.jpg",
      },
      {
        id: "user_3",
        lastname: "Granger",
        firstname: "Hermione",
        mutual_friends_count: 150,
        username: "hermione_granger",
        friendship_status: "friends",
        profile_picture: "https://example.com/hermione_profile.jpg",
      },
    ],
  };

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(singleUser);

  return user;
};

export default useUser;
