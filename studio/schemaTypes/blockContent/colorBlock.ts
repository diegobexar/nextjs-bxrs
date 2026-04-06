import {defineField, defineType} from 'sanity'
import {layoutFields, layoutFieldset} from './layoutFields'

export const colorBlock = defineType({
  name: 'colorBlock',
  title: 'Color/Background Block',
  type: 'object',
  fieldsets: [layoutFieldset],
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Hex color code (e.g., #F5F5DC, #8B0000)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'string',
      options: {
        list: [
          {title: 'Small (100px)', value: 'sm'},
          {title: 'Medium (200px)', value: 'md'},
          {title: 'Large (300px)', value: 'lg'},
          {title: 'Extra Large (400px)', value: 'xl'},
          {title: 'Full Screen', value: 'full'},
        ],
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'padding',
      title: 'Padding',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
        ],
      },
      initialValue: 'md',
    }),
    ...layoutFields,
  ],
  preview: {
    select: {
      color: 'backgroundColor',
      height: 'height',
    },
    prepare({color, height}) {
      return {
        title: `Color Block: ${color || 'No color set'}`,
        subtitle: `Height: ${height || 'medium'}`,
      }
    },
  },
})
