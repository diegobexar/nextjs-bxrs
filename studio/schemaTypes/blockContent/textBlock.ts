import {defineField, defineType} from 'sanity'
import {layoutFields, layoutFieldset} from './layoutFields'

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fieldsets: [layoutFieldset],
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
          {title: 'Extra Large', value: 'xl'},
          {title: '2XL', value: '2xl'},
          {title: '3XL', value: '3xl'},
          {title: '4XL', value: '4xl'},
        ],
      },
      initialValue: 'md',
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
      initialValue: 'normal',
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
      content: 'content',
    },
    prepare({content}) {
      const block = content?.find((c: any) => c._type === 'block')
      const text = block?.children?.[0]?.text || 'Text Block'
      return {
        title: text.substring(0, 50) + (text.length > 50 ? '...' : ''),
      }
    },
  },
})
