import { defineField, defineType } from 'sanity'

export const social = defineType({
  name: 'social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'image',
      description: 'Only svg allowed',
      options: {
        accept: 'image/svg+xml'
      },
      validation: (rule) => rule
        .required()
    }),
  ]
})