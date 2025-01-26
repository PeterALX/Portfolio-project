import { defineField, defineType } from 'sanity'

export const personalHero = defineType({
  name: 'personalHero',
  title: 'Personal Hero',
  type: 'document',
  preview: {
    select: {
      media: "image",
    },
    prepare({ media }) {
      return {
        title: 'Personal Hero',
        media: media
      }
    }
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'greeting',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required().unique().min(3).max(5),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule
        .required()
        .error('Weka mboto we mzee'),
    }),
  ]
})
