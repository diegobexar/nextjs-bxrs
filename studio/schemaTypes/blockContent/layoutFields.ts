import {defineField} from 'sanity'

export const layoutFields = [
  defineField({
    name: 'maxWidth',
    title: 'Max Width',
    type: 'string',
    description: 'Constrain the width of this block (leave empty for default)',
    options: {
      list: [
        {title: 'Full Width', value: 'full'},
        {title: '7XL (1280px)', value: '7xl'},
        {title: '5XL (1024px)', value: '5xl'},
        {title: '3XL (768px)', value: '3xl'},
        {title: 'XL (576px)', value: 'xl'},
      ],
    },
    fieldset: 'layout',
  }),
  defineField({
    name: 'alignment',
    title: 'Alignment',
    type: 'string',
    description: 'Horizontal alignment when width is less than full',
    options: {
      list: [
        {title: 'Left', value: 'left'},
        {title: 'Center', value: 'center'},
        {title: 'Right', value: 'right'},
      ],
    },
    fieldset: 'layout',
  }),
]

export const layoutFieldset = {
  name: 'layout',
  title: 'Layout',
  options: {collapsible: true, collapsed: true},
}
