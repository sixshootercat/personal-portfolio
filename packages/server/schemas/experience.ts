import { defineType, defineField } from 'sanity';

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      placeholder: 'YYYY-MM-DD',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      placeholder: 'YYYY-MM-DD',
    }),
  ],
});
