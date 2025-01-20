import { defineField, defineType } from 'sanity'

export const technology = defineType({
  name: 'technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
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
