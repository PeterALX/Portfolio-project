import { defineField, defineType } from 'sanity'

export const about = defineType({
  name: 'about',
  type: 'document',
  preview: {
    prepare: () => ({ title: 'About Me' })
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (rule) => rule.required()
    }),
  ]
})
