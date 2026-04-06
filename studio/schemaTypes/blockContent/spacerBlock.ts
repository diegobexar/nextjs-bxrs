import {defineField, defineType} from 'sanity'

export const spacerBlock = defineType({
  name: 'spacerBlock',
  title: 'Spacer Block',
  type: 'object',
  fields: [
    defineField({
      name: 'height',
      title: 'Height',
      type: 'string',
      options: {
        list: [
          {title: 'Extra Small (1rem)', value: 'xs'},
          {title: 'Small (2rem)', value: 'sm'},
          {title: 'Medium (4rem)', value: 'md'},
          {title: 'Large (6rem)', value: 'lg'},
          {title: 'Extra Large (8rem)', value: 'xl'},
        ],
      },
      initialValue: 'md',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      height: 'height',
    },
    prepare({height}) {
      return {
        title: `Spacer: ${height || 'medium'}`,
      }
    },
  },
})
