import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (rule) => rule
        .required()
    }),
  ]
})
