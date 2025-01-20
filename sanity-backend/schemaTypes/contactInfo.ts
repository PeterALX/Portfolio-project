import { defineField, defineType } from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  type: 'document',
  preview: {
    prepare: () => ({ title: 'Contact Info' })
  },
  fields: [
    defineField({
      name: 'phoneNumber',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'email',
      validation: (rule) => rule
        .required()
    }),
    defineField({
      name: "location",
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ]
})

