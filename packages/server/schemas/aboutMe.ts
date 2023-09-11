import { defineType, defineField } from "sanity";

export const aboutMeType = defineType({
  name: "aboutMe",
  title: "About Me",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "biography",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
