import { defineField, defineType } from 'sanity'

export const experience = defineType({
  name: 'experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyImage',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "workSummary",
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "technologies",
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'technology' }]
      }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startYear',
      type: 'number',
      validation: (rule) => rule
        .custom((value) => {
          if (value === null || value === undefined) return ('Required')
          if (value < 2015) return (`Start year must be 2015 or after.`) // value cannot be null because of the required() validation
          if (value > new Date().getFullYear()) return ('Start year cannot be in the future.')
          return true
        })
    }),
    defineField({
      name: 'endYear',
      type: 'number',
      validation: (rule => rule
        .custom((value, context) => {
          if (value === undefined || value === null) return true // No endYear means the thing is still ongoing
          const startYear = context.document?.startYear
          if (startYear === undefined || startYear === null) return ('There is no Start year')
          if (typeof startYear !== 'number') return (`Start year should be a number, ${typeof startYear} was received`)
          if (value < startYear) return ('End year cannot be less than Start year')
          if (value > new Date().getFullYear()) return ('End year cannot be in the future.')

          return (true)
        })
      )
    }),
  ]
})
