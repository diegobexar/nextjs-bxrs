import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'Brief description for SEO and meta tags',
    }),
    defineField({
      name: 'infoContent',
      title: 'Info/About Content',
      type: 'array',
      description: 'Content for the /info page',
      of: [
        {type: 'imageBlock'},
        {type: 'textBlock'},
        {type: 'linkBlock'},
        {type: 'headingBlock'},
        {type: 'colorBlock'},
        {type: 'spacerBlock'},
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', type: 'string', title: 'Platform'},
            {name: 'url', type: 'url', title: 'URL'},
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'theme',
      title: 'Site Theme',
      type: 'string',
      description: 'Choose the color scheme for the entire site',
      options: {
        list: [
          {title: 'Light Mode', value: 'light'},
          {title: 'Dark Mode', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'dark',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
    },
    prepare({title}) {
      return {
        title: title || 'Site Settings',
      }
    },
  },
})
