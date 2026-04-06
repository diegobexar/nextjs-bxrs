import {defineField, defineType} from 'sanity'
import {layoutFields, layoutFieldset} from './layoutFields'

export const headingBlock = defineType({
  name: 'headingBlock',
  title: 'Heading Block',
  type: 'object',
  fieldsets: [layoutFieldset],
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Heading Level',
      type: 'string',
      options: {
        list: [
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
        ],
      },
      initialValue: 'h2',
    }),
    defineField({
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
      options: {
        list: [
          {title: 'Large', value: 'lg'},
          {title: 'Extra Large', value: 'xl'},
          {title: '2XL', value: '2xl'},
          {title: '3XL', value: '3xl'},
          {title: '4XL', value: '4xl'},
          {title: '5XL', value: '5xl'},
          {title: '6XL', value: '6xl'},
        ],
      },
      initialValue: '2xl',
    }),
    defineField({
      name: 'fontWeight',
      title: 'Font Weight',
      type: 'string',
      options: {
        list: [
          {title: 'Normal', value: 'normal'},
          {title: 'Medium', value: 'medium'},
          {title: 'Semibold', value: 'semibold'},
          {title: 'Bold', value: 'bold'},
        ],
      },
      initialValue: 'bold',
    }),
    defineField({
      name: 'textTransform',
      title: 'Text Transform',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Uppercase', value: 'uppercase'},
          {title: 'Lowercase', value: 'lowercase'},
          {title: 'Capitalize', value: 'capitalize'},
        ],
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'textAlign',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Hex color code (e.g., #F5F5DC)',
    }),
    ...layoutFields,
  ],
  preview: {
    select: {
      text: 'text',
      level: 'level',
    },
    prepare({text, level}) {
      return {
        title: text,
        subtitle: level?.toUpperCase() || 'H2',
      }
    },
  },
})
